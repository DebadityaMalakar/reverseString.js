function reverse(s){
  let r = "";
  for(let i=s.length;i>=0;i--){
    r += s.charAt(i);
  }
  return (r);
}

function main () {
  console.log(reverse("wow"));
}
main();
