export default function getLocalDate(date:string){
  return new Date(date).toLocaleDateString();
}