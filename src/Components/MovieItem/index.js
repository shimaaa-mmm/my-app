import { Fragment } from "react"
import "./style.css"
export default function MovieItem({items,listTitle}){
    function renderFarm(){
        return items.data.map((currentItem)=>{
            return(
                <li>
                    <a href="#"><img src={currentItem.poster}/></a>
                    <h2 ><a href="#">{currentItem.title}</a></h2>
                </li>
            )
        })
    }
    return(
        <Fragment>
           <a href="#"><h2 className="title">{listTitle}</h2></a>
           <img src="/assets/photo/images.jpg"/>
          <ul className="list"> {renderFarm()}</ul>
        </Fragment>
    )
}
