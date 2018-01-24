import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Tooltip } from 'antd'
import { PhotoWall } from 'aek-upload'
import Styles from './index.less'

function PlainForm ({ data = {}, size = 2 }) {
  const singeSize = Math.round(24 / size)
  const list = []
  for (const [prop, value] of Object.entries(data)) {
    const filled = prop.includes('|fill')
    const imgFlag = prop.includes('|img')
    const wrapFlag = prop.includes('|nowrap')
    const exclude = prop.includes('|false')
    const key = prop.split('|')[0]

    if (!exclude) {
      let content
      if (imgFlag) {
        content = <PhotoWall value={value} />
      } else if (wrapFlag) {
        content = (
          <Tooltip title={value}>
            <p className={Styles.textOverflow}>{value}</p>
          </Tooltip>
        )
      } else {
        content = value
      }

      list.push(
        <Col className={Styles.row} span={filled ? 24 : singeSize} key={key}>
          <div className={Styles.itemWrap}>
            <div className={Styles.itemKey} title={key}>
              {key}
              <span style={{ margin: '0 8px 0 2px' }}>:</span>
            </div>
            <div className={Styles.itemVal}>{content}</div>
          </div>
        </Col>
      )
    }
  }
  return <Row>{list}</Row>
}

PlainForm.propTypes = {
  data: PropTypes.object,
  size: PropTypes.number
}

export default PlainForm
