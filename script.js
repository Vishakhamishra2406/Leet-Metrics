document.addEventListener("DOMContentLoaded", function(){
    const searchBtn = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");
    const progressClass = document.querySelector(".progress");
    const name  = document.querySelector(".name");
    const totalSolved = document.querySelector(".totalSolved");
    const ranking = document.querySelector(".ranking");
    const contribution = document.querySelector(".contribution");
    const reputation = document.querySelector(".reputation");

    //return true or false based on regex
    function validateUsername(username){
        if(username==""){ 
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) alert("Invalid username");
        return isMatching;
    }

    // to display the information on cards
    function displayCards(data){
        totalSolved.textContent = `Total Problems Solved : ${data.totalSolved || 0}`;
        ranking.textContent = `Ranking : ${data.ranking || "N/A"}`;
        contribution.textContent = `Contribution Points : ${data.contributionPoints || "N/A"}`;
        reputation.textContent =`Reputation : ${data.reputation || "N/A"}`;
        cardStatsContainer.style.display="flex";
    }

    function displayUserData(data){
        // Defensive fallback to avoid division by zero
        const easySolvedPercent = data.totalEasy ? (data.easySolved / data.totalEasy) * 100 : 0;
        const mediumSolvedPercent = data.totalMedium ? (data.mediumSolved / data.totalMedium) * 100 : 0;
        const hardSolvedPercent = data.totalHard ? (data.hardSolved / data.totalHard) * 100 : 0;

        easyProgressCircle.style.setProperty("--progress-degree",`${easySolvedPercent}%`);
        mediumProgressCircle.style.setProperty("--progress-degree",`${mediumSolvedPercent}%`);
        hardProgressCircle.style.setProperty("--progress-degree",`${hardSolvedPercent}%`);

        easyLabel.textContent= `${data.easySolved || 0}/${data.totalEasy || 0}`;
        mediumLabel.textContent= `${data.mediumSolved || 0}/${data.totalMedium || 0}`;
        hardLabel.textContent= `${data.hardSolved || 0}/${data.totalHard || 0}`;

        name.style.display="block" ;
        progressClass.style.display="flex";

        // Warn if data is missing
        if (!data.mediumSolved || !data.hardSolved) {
            cardStatsContainer.insertAdjacentHTML('afterbegin', `<div style="color:orange; font-size:large;">Some data may be missing due to API limitations.</div>`);
        }
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchBtn.textContent ="Generating...";
            searchBtn.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch user-details...");
            }
            const data = await response.json();
            if (data.status === "error" || data.message === "user does not exist") {
                throw new Error("User not found or API error.");
            }
            displayUserData(data);
            displayCards(data);
        }
        catch(error){
            console.error("Error fetching user details:", error);
            name.textContent = "Error fetching user details!";
            name.style.display = "block";
            progressClass.style.display = "none";
            cardStatsContainer.style.display = "none";
        }
        finally{
            searchBtn.innerHTML=`<span>Generate</span><span class="material-symbols-outlined">
                    query_stats
                    </span>`
            searchBtn.disabled = false;
            usernameInput.value="";
        }
    }

    searchBtn.addEventListener("click", ()=>{
        const username = usernameInput.value;
        name.textContent =`Welcome! ${username}`;
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })

    // on clicking the userinput field all the details got hidded
    usernameInput.addEventListener("click",()=>{
        name.style.display="none" ;
        progressClass.style.display="none";
        cardStatsContainer.style.display="none";
    });

    // to resume and play the toggle animation
    function toggleAnimation(element) {
        const currentState = window.getComputedStyle(element).animationPlayState;
        if (currentState === 'running') {
            element.style.animationPlayState = 'paused';
        } else {
            element.style.animationPlayState = 'running';
        }
    }

    name.addEventListener("click", function() {
        toggleAnimation(name); // Now the correct element is passed
    });
});