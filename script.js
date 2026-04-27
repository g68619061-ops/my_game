let select_btn = document.querySelectorAll(".my");
let check = true;

let a = [0, 1, 2];
let b = [3, 4, 5];
let c = [6, 7, 8];
let d = [0, 4, 8];
let e = [2, 4, 6];




for (let i = 0; i < select_btn.length; i++) {


    if (alert.textContent === "Winner")
        select_btn[i].textContent = "";
}



for (let i = 0; i < select_btn.length; i++) {
    select_btn[i].addEventListener("click", () => {
        if (check) {
            select_btn[i].textContent = "X"
            check = false;
            select_btn[i].disabled = true;
        }
        else {
            select_btn[i].textContent = "O"
            check = true;
            select_btn[i].disabled = true;
        }

        if (select_btn[a[0]].textContent === "X" && select_btn[a[1]].textContent === "X" && select_btn[a[2]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
   

            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[a[1]].textContent === "O" && select_btn[a[2]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[b[0]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[b[2]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[b[0]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[b[2]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[c[0]].textContent === "X" && select_btn[c[1]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[c[0]].textContent === "O" && select_btn[c[1]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "X" && select_btn[b[0]].textContent === "X" && select_btn[c[0]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");

            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[b[0]].textContent === "O" && select_btn[c[0]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[a[1]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[1]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[a[1]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[1]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "X" && select_btn[b[2]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "O" && select_btn[b[2]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[0]].textContent === "X") {
            setTimeout(() => {
                alert("X Is Winner");
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[0]].textContent === "O") {
            setTimeout(() => {
                alert("O Is Winner");
            }, 100)
        }

    })
}

