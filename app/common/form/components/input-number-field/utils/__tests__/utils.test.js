/* eslint-disable max-lines-per-function */
import { largeNumberFormatter, largeNumberParser } from '../index'

describe('Input number field utils', () => {
  describe('largeNumberParser', () => {
    it('should parse numbers with letters "k", "m", "b" correctly', () => {
      // Assert
      expect(largeNumberParser('123k')).toEqual('123000')
      expect(largeNumberParser('123K')).toEqual('123000')
      expect(largeNumberParser('123m')).toEqual('123000000')
      expect(largeNumberParser('123M')).toEqual('123000000')
      expect(largeNumberParser('123b')).toEqual('123000000000')
      expect(largeNumberParser('123B')).toEqual('123000000000')
    })

    it('should parse numbers with comas correctly', () => {
      // Assert
      expect(largeNumberParser('123,000')).toEqual('123000')
      expect(largeNumberParser('12,000,000')).toEqual('12000000')
      expect(largeNumberParser('1,230k')).toEqual('1230000')
      expect(largeNumberParser('1,230.230k')).toEqual('1230230')
      expect(largeNumberParser('1,230.230,000')).toEqual('1230.230000')
    })

    it('should accept empty string', () => {
      // Assert
      expect(largeNumberParser('')).toEqual('')
    })

    it('should accept point at the end', () => {
      // Assert
      expect(largeNumberParser('0.')).toEqual('0.')
      expect(largeNumberParser('10.')).toEqual('10.')
    })

    it('should not accept k, b, m as the first symbol', () => {
      // Assert
      expect(largeNumberParser('k')).toEqual('')
      expect(largeNumberParser('m')).toEqual('')
      expect(largeNumberParser('b')).toEqual('')
      expect(largeNumberParser('K')).toEqual('')
      expect(largeNumberParser('M')).toEqual('')
      expect(largeNumberParser('B')).toEqual('')
    })

    it('should not accept k, b, m after point', () => {
      // Assert
      expect(largeNumberParser('0.k')).toEqual('0')
      expect(largeNumberParser('0.K')).toEqual('0')
      expect(largeNumberParser('10.m')).toEqual('10')
      expect(largeNumberParser('10.M')).toEqual('10')
      expect(largeNumberParser('1,000.b')).toEqual('1000')
      expect(largeNumberParser('1,000.B')).toEqual('1000')
    })
  })

  describe('largeNumberFormatter', () => {
    it('should format numbers with comas correctly', () => {
      // Assert
      expect(largeNumberFormatter('0')).toEqual('0')
      expect(largeNumberFormatter('1')).toEqual('1')
      expect(largeNumberFormatter('10')).toEqual('10')
      expect(largeNumberFormatter('100')).toEqual('100')
      expect(largeNumberFormatter('1000')).toEqual('1,000')
      expect(largeNumberFormatter('10000')).toEqual('10,000')
      expect(largeNumberFormatter('100000')).toEqual('100,000')
      expect(largeNumberFormatter('1000000')).toEqual('1,000,000')
      expect(largeNumberFormatter('123,000')).toEqual('123,000')
      expect(largeNumberFormatter('13,000,000')).toEqual('13,000,000')
    })

    it('should format numbers with decimal point correctly', () => {
      // Assert
      expect(largeNumberFormatter('0.0')).toEqual('0.0')
      expect(largeNumberFormatter('1.1')).toEqual('1.1')
      expect(largeNumberFormatter('10.123')).toEqual('10.123')
      expect(largeNumberFormatter('100.123123')).toEqual('100.123,123')
      expect(largeNumberFormatter('1000.123')).toEqual('1,000.123')
      expect(largeNumberFormatter('10000.123123')).toEqual('10,000.123,123')
    })

    it('should accept empty string', () => {
      // Assert
      expect(largeNumberFormatter('')).toEqual('')
    })

    it('should accept point at the end', () => {
      // Assert
      expect(largeNumberFormatter('1,000.')).toEqual('1,000.')
      expect(largeNumberFormatter('1100.')).toEqual('1,100.')
    })
  })
})
/* eslint-enable max-lines-per-function */
