import Toast from "./Toast";
import { BrowserRouter } from "react-router-dom";


export default {
    title:"Myself/BookmarkToast",
    component: Toast, 
    parameters:{
    backgrounds:{default:'light'},
    controls: { hideNoControlsWarning: true },
    },
   };

   const Template = (args) => {
    return (
      <BrowserRouter>
        <Toast AddToast={args.addToast} RemoveToast={args.removeToast} />
      </BrowserRouter>
    );
  };
  
  export const AddBookmarkToast = (args) => <Template {...args} />;
  AddBookmarkToast.args = {
    addToast: true,
  };
  
  export const RemoveBookmarkToast = (args) => <Template {...args} />;
  RemoveBookmarkToast.args = {
    removeToast: true,
  };