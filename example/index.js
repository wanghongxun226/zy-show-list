import React from 'react'
import ReactDOM from 'react-dom'
import PlainForm from '../index'

ReactDOM.render(
  <PlainForm size={2} data={{ 测试: '测试value', 测试1: '测试value', 测试2: '测试value', 测试3: '测试value', '图片|img': 'http://aek-image-test.test.upcdn.net/userImage/2018_01_23/11_23_27_v82iervgpmm9elpo7tocllrcruev217a.jpg' }} />,
  document.getElementById('root')
)
