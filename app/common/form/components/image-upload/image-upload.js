import React from 'react';
import { Icon, Modal, Upload } from 'antd';
import { head, pipe, prop, isEmpty, F } from 'ramda';
import PropTypes from 'prop-types';

import FormContext from '../../context/form-context';
import './styles.css';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const getFirstConvertedImage = pipe(
  head,
  prop('originFileObj'),
  getBase64,
);

const uploadButton = title => (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">{title}</div>
  </div>
);

class ImageUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = async ({ fileList }) => {
    const { onUpload } = this.props;

    if (!isEmpty(fileList)) {
      const image = await getFirstConvertedImage(fileList);
      onUpload(image);
    } else {
      onUpload(undefined);
    }

    this.setState({ fileList });
  };

  render() {
    const { title, isRTL } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const hasOneFile = fileList.length === 1;

    return (
      <div className={`clearfix ${isRTL && 'LTRImageUpload'}`}>
        <Upload
          beforeUpload={F}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {hasOneFile ? null : uploadButton(title)}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  onUpload: PropTypes.func,
  title: PropTypes.any,
  isRTL: PropTypes.bool,
};

ImageUpload.defaultProps = {
  onUpload: () => undefined,
  title: 'Upload',
  isRTL: false,
};

ImageUpload.contextType = FormContext;

export default ImageUpload;
