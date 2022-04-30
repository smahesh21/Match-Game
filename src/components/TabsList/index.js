import './index.css'

const TabsList = props => {
  const {eachTab, isActive, selectedTabItem} = props
  const {tabId, displayText} = eachTab
  const tabText = isActive ? 'tab-text' : 'display-text'
  const onClickTabItem = () => {
    selectedTabItem(tabId)
  }
  return (
    <li>
      <button className="tab-button" type="button" onClick={onClickTabItem}>
        <h1 className={tabText}>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabsList
