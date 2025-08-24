 function myStartRankingPool() {
     TitleBar();   
    const myDiv = document.createElement("div");
          myDiv.classList.add("RankingTable-Container");
    const title = document.createElement("h2");
          title.textContent = "Classifica Iniziale 31";
          title.classList.add("FFDRankingHeaderTitle");
          myDiv.appendChild(title);
    const coeffd = document.createElement("p");
          coeffd.textContent     = "text";
          coeffd.style.textAlign = "right";
          myDiv.appendChild(coeffd);

    const myWrapperDiv = document.createElement("div");
          myWrapperDiv.classList.add("RankingTable-Wrapper");

    const RTable = document.createElement("table");
          RTable.classList.add("RankingTable");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const intestazioni = ["Pos", "Rank", "Athleta","","Anno","Club", "Club Name", "Points"];
    intestazioni.forEach(testo => {
        const th = document.createElement("th");
        th.textContent = testo;
        if (testo === "Athleta") th.style.borderRight  = "none";
        if (testo === "")  th.style.borderLeft   = "none";
        headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");
 

    RTable.appendChild(tbody);
    thead.appendChild(headerRow);
    RTable.appendChild(thead);
    myWrapperDiv.appendChild(RTable);
    myDiv.appendChild(myWrapperDiv);
    document.body.appendChild(myDiv);

    return myDiv;
} // end function myStartRankingPool