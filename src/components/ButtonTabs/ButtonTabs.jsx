import  './ButtonTabs.css'

export default function ButtonTabs({TextTabs,onClick ,buttonStyle ,backtabsColor}) {
  return (
   
          <button onClick={onClick}className={buttonStyle} style={{backgroundColor:backtabsColor}}>
       {TextTabs}
    </button>


  )
}