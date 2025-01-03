import'./StoriesCard.css'
import StoriesTitel from '../StoriesTitel/StoriesTitel'
import StoriesDivComponent from "../StoriesDivComponent/StoriesDivComponent"
export default function StoriesCard({textdesc,showdesc,stylestoirscard }) {
  return (
    <>
    <div className ={stylestoirscard }>
      <StoriesTitel/>
      <StoriesDivComponent styleStoriesDiv={'hm-StoriesDivComponent'}/>
      {!showdesc&& <p>{textdesc}</p>}
    </div>
    </>
  )
}
