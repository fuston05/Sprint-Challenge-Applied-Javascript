// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then(res => {
                const topics= document.querySelector('.topics');
                const top= res.data.topics;//destructure
                // console.log(top);

                top.forEach( ele => {
                        topics.appendChild(createTab(ele) );
                        // console.log(ele);
                })//end foreach
                // console.log(res);
        })
        .catch(err => {
                console.log('Error: ', err);
        })

function createTab(topic){
        //create elements
        const tab= document.createElement('div');

        //add classes
        tab.classList.add('tab');

        //add content
        tab.textContent= topic;

        return tab;
}//end func



