function Tgl(click_id) {
    var x = document.getElementById(click_id);
    var z = click_id.match(/\d+/)[0];
    var y = click_id.match(/[a-z]{2}[0-9]{1,3}[a-z]{0,2}/);
    var w = document.getElementById(y);
    var t = document.getElementById(`p${y}`);

    /* If [+] is visible, make it invisible and display [-] - and vice versa*/
    if (click_id.indexOf('p') >= 0) {
      if (x.style.display === "none") {
        x.style.display = "inline";
        w.style.display = "none";
      }
      if (x.style.display === "inline") {
        x.style.display = "none";
        w.style.display = "inline";
      }
    } else {
      if (x.style.display === "none") {
        x.style.display = "inline";
        t.style.display = "none";
      }
      if (x.style.display === "inline") {
        x.style.display = "none";
        t.style.display = "inline";
      }
    }
    /*Toggle dropdown display onclick*/
    document.getElementById(`lvl${y}`).classList.toggle("tshow");
    /*Increment list spacing with each nest*/
    var p = document.getElementById(`lvl${y}`);
    p.style.paddingLeft = (9 * z) + 'px';
}