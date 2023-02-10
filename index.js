function reverse(s){
  let r = "";
  for(let i=s.length;i>=0;i--){
    r += s[i];
  }
  return (r);
}

function main () {
  let s="wow";
  console.log(reverse(s));
}
main();
