import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeBtn = isActive ? 'active-btn' : ''

  const clickTab = () => {
    selectTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
