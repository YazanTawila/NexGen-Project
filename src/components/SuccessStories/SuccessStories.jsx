import './SuccessStories.css'

import StoriesCard from '../StoriesCard/StoriesCard';
import TabsTitel from '../TabsTitel/TabsTitel';
export default function SuccessStories() {
  return (
    <>
        
              <div className="HM-Margin hm-Stories-content">
              <StoriesCard stylestoirscard ={'hm-StoriesCard'}
              ShowDesc={true}
              />
                <TabsTitel/>
            </div>
    </>
  )
}
