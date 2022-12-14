export function getItemFromLocalStorage(item: string): string | undefined {
    if (localStorage.getItem(item) !== null) {
      return JSON.parse(localStorage.getItem(item) as string);
    } else {
      return '';
    }
  }
  
  export function setItemToLocalStorage(
    item: string,
    value: string | undefined | boolean | ArrayBuffer | Blob
  ) {
    localStorage.setItem(item, JSON.stringify(value));
  }