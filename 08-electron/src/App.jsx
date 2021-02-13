import React from 'react'
import styles from './index.scss'
import { remote } from 'electron'
import path from 'path'
 
export const App = () => {
  const handleClick = () => {
    const modalPath = path.join('file://', remote.app.getAppPath(), 'dist/login.html')
    let win = new remote.BrowserWindow({ width: 400, height: 320 })

    win.on('close', () => {
      win = null
    })

    win.loadURL(modalPath)
    win.show()
  }

  return (
    <>
      <div className={styles.title}>Electron测试</div>
      <button onClick={handleClick}>点击创建新窗口</button>
    </>
  )
}
