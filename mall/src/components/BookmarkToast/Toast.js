import bookmarkAdd from "../.././img/2Property 1=Add to Bookmark.png";
import bookmarkRemove from "../.././img/2Property 1=Remove from Bookmark.png"
import '../.././App.css';


function BookmarkToast({AddToast, RemoveToast}){
  
  return(
  <>
  {AddToast ? <div className="bookmark-toast-add">
  <img src ={bookmarkAdd} alt="bookmark img" width="300rem" height="67rem"></img>
  </div> : null}
  {RemoveToast ? <div className="bookmark-toast-remove">
  <img src ={bookmarkRemove} alt="bookmark img" width="300rem" height="67rem"></img>
  </div> : null}
  </>
)
}

export default BookmarkToast;