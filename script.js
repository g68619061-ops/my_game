let body = document.querySelector("body");
let main = document.querySelector("#main");
let owner = document.querySelector("#name");
let select_btn = document.querySelectorAll(".my");
let check = true;

let a = [0, 1, 2];
let b = [3, 4, 5];
let c = [6, 7, 8];
let d = [0, 4, 8];
let e = [2, 4, 6];

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
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[a[1]].textContent === "O" && select_btn[a[2]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[b[0]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[b[2]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[b[0]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[b[2]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[c[0]].textContent === "X" && select_btn[c[1]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[c[0]].textContent === "O" && select_btn[c[1]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "X" && select_btn[b[0]].textContent === "X" && select_btn[c[0]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";

            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[b[0]].textContent === "O" && select_btn[c[0]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[1]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[1]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[1]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[1]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "X" && select_btn[b[2]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "O" && select_btn[b[2]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[2]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[0]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[2]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "X" && select_btn[b[1]].textContent === "X" && select_btn[c[0]].textContent === "X") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n X Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[2]].textContent === "O" && select_btn[b[1]].textContent === "O" && select_btn[c[0]].textContent === "O") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Tic Tac Toe \n O Is Winner";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)
        }
        else if (select_btn[a[0]].textContent !== "" &&
            select_btn[a[1]].textContent !== "" &&
            select_btn[a[2]].textContent !== "" &&
            select_btn[b[0]].textContent !== "" &&
            select_btn[b[1]].textContent !== "" &&
            select_btn[b[2]].textContent !== "" &&
            select_btn[c[0]].textContent !== "" &&
            select_btn[c[1]].textContent !== "" &&
            select_btn[c[2]].textContent !== "") {
            setTimeout(() => {
                let pop_up = document.createElement("div");
                pop_up.classList.add("pop_up");
                pop_up.innerText = "Draw !";
                pop_up.style.color = "rgb(228, 25, 25)";
                body.append(pop_up);
                main.style.display = "none";
                owner.style.display = "none";
            }, 100)

        }
    }
    )
}
