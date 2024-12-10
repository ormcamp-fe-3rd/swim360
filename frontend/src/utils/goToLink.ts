
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

/* exported goToLink */

// "use strict";



export function goToLinkClick(url: string) {
  window.location.href = url;
}


export function goToLinkKeyboard(event: React.KeyboardEvent, url: string){
  if(event.key === 'Enter'){
    event.preventDefault();
    event.stopPropagation();
    window.location.href = url;
  }
}