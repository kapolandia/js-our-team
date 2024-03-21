const names = [
    {
        myName: "Wayne Barnett",
        role : "Founder & CEO",
        img : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        myName: "Angela Caroll",
        role : "Chief Editor",
        img : "img/angela-caroll-chief-editor.jpg"
    },
    {
        myName: "Walter Gordon",
        role : "Office Manager",
        img : "img/walter-gordon-office-manager.jpg"
    },
    {
        myName: "Angela Lopez",
        role : "Social Media Manager",
        img : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        myName: "Scott Estrada",
        role : "Developer",
        img : "img/scott-estrada-developer.jpg"
    },
    {
        myName: "Barbara Ramos",
        role : "Graphic Designer",
        img : "img/barbara-ramos-graphic-designer.jpg"
    },
];

const container = document.querySelector("#container");

names.forEach(name => {
    container.innerHTML += `
        <div class="card m-3" style="width: 18rem;">
            <img src="${name.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name.myName}</h5>
                <p class="card-text">${name.role}</p>
            </div>
        </div>
    `;
});
