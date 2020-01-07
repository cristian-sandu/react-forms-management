import React from 'react';
import { Icon, Modal, Upload } from 'antd';
import { head, pipe, prop, isEmpty } from 'ramda';
import PropTypes from 'prop-types';

import FormContext from '../../context/form-context';

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

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
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
    const { previewVisible, previewImage, fileList } = this.state;
    const hasOneFile = fileList.length === 1;

    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {hasOneFile ? null : uploadButton}
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
};

ImageUpload.defaultProps = {
  onUpload: () => undefined,
};

ImageUpload.contextType = FormContext;

export default ImageUpload;
