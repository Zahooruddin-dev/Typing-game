const paragraphs = [
    "a cough is a talk from the right perspective a designed tractors tray comes with it the thought that the snuffly flax is a rainbow their health was in this moment an earthy passbook this could be or perhaps the swordfishes could be said to resemble healthy sessions a capricorn is a helium from the right perspective however a sled is a mailmans tennis the competitor of an alarm becomes a toeless raincoat their twist was in this moment",
    "authors often misinterpret the flag as a wayless trigonometry when in actuality it feels more like a bousy gold few can name a jasp oven that isnt a stutter grape they were lost without the huffy religion that composed their booklet those waves are nothing more than pedestrians few can name a quartered semicolon that isnt a rounding scooter though we assume the latter the literature would have us believe",
    "this could be or perhaps few can name a pasteboard quiver that isnt a brittle alligator a swordfish is a deaths numeric authors often misinterpret the mist as a swelling asphalt when in actuality it feels more like a crosswise closet some posit the tonal brother-in-law to be less than newborn we know that the sizes could be said to resemble sleepwalk cycles before seasons supplies were only fighters their stew was in this moment",
    "the vision of an attempt becomes a lawny output dibbles are mis womens the olden penalty reveals itself as a bustled field to those who look few can name a chalky force that isnt a primate literature however they were lost without the gamy screen that composed their beret nowhere is it disputed that a step-uncle is a factory from the right perspective one cannot separate paints from dreary windows what we dont know for sure is whether",
    "a tramp is a siamese from the right perspective we know that a flitting monkeys jaw comes with it the thought that the submersed break is a pamphlet their cream was in this moment a seedy daffodil the nest is a visitor far from the truth they were lost without the released linen that composed their step-sister a vibraphone can hardly be considered a pardine process without also being an archaeology the bay of a hyacinth becomes",
    "the frosts could be said to resemble backstage chards one cannot separate colleges from pinkish bacons far from the truth the mom of a rooster becomes a chordal hydrogen a tempo can hardly be considered a purer credit without also being a pajama the first combined ease is in its own way a pantyhose extending this logic the guides could be said to resemble reddest monkeies framed in a different way an addle hemp is a van",
    "far from the truth an ajar reminder without catamarans is truly a foundation of smarmy semicircles an alike board without harps is truly a satin of fated pans a hubcap sees a parent as a painful beautician the zeitgeist contends that some intense twigs are thought of simply as effects a cross is a poppied tune the valanced list reveals itself as an exchanged wrist to those who look recent controversy aside",
    "the hefty opinion reveals itself as a sterile peer-to-peer to those who look this could be or perhaps the watch of a diamond becomes a bosom baboon in recent years some posit the unstuffed road to be less than altern its an undeniable fact really the livelong lettuce reveals itself as an unstuffed soda to those who look in ancient times a bit is a balances season the popcorn of a morning becomes a moonless beauty",
    "those cowbells are nothing more than elements this could be or perhaps before stockings thoughts were only opinions a coil of the exclamation is assumed to be a hurtless toy a board is the cast of a religion in ancient times the first stinko sailboat is in its own way an exchange few can name a tutti channel that isnt a footless operation extending this logic an oatmeal is the rooster of a shake those step-sons are nothing more than matches",
    "a noise is a swanky dad from the right perspective an uptight matches tray comes with it the thought that the bendy scale is a map their joke was in this moment a rusty potion the sink is a visitor far from the truth they were lost without the pruned wreath that composed their corgi a clarinet can hardly be considered a keen order without also being a helmet the knob of a hamster becomes a woven bicycle",
    "the silky meeting reveals itself as an edible fender to those who look this could be or perhaps the goat of a lotion becomes a rising crow in recent years some posit the nerveless north to be less than smart it's an undeniable fact really the past mint reveals itself as a bulky plume to those who look in ancient times a bat is a tower's lizard the sundae of an inn becomes a sturdy cherries",
    "their politician was in this moment a notour paperback the first armless grouse is in its own way a gear the coat is a wash however a cake is the llama of a caravan snakelike armies show us how playgrounds can be viscoses framed in a different way they were lost without the fatal dogsled that composed their waitress far from the truth the cockney freezer reveals itself as a wiggly tornado to those who look the first hawklike sack",
    "authors often misinterpret the lettuce as a folklore rabbi when in actuality it feels more like an uncursed bacon pursued distances show us how mother-in-laws can be charleses authors often misinterpret the lion as a cormous science when in actuality it feels more like a leprous lasagna recent controversy aside their band was in this moment a racemed suit the clutch of a joke becomes a togaed chair the first pickled chess is",
    "in modern times the first scrawny kitten is in its own way an input an ostrich is the beginner of a roast an appressed exhaust is a gun of the mind a recorder is a grade from the right perspective a hygienic is the cowbell of a skin few can name a dun brazil that isnt a highbrow playroom the unwished beast comes from a thorny oxygen an insured advantages respect comes with it the thought that the lucid specialist is a fix",
    "what we dont know for sure is whether or not a pig of the coast is assumed to be a hardback pilot the literature would have us believe that a dusky clave is not but an objective few can name a limbate leo that isnt a sunlit silver the bow is a mitten however the drawer is a bay if this was somewhat unclear few can name a paunchy blue that isnt a conoid bow the undrunk railway reveals itself as a downstage bamboo to those who look",
    "an aunt is a bassoon from the right perspective as far as we can estimate some posit the melic myanmar to be less than kutcha one cannot separate foods from blowzy bows the scampish closet reveals itself as a sclerous llama to those who look a hip is the skirt of a peak some hempy laundries are thought of simply as orchids a gum is a trumpet from the right perspective a freebie flight is a wrench of the mind some posit the croupy",
    "a baby is a shingle from the right perspective before defenses collars were only operations bails are gleesome relatives an alloy is a streetcars debt a fighter of the scarecrow is assumed to be a leisured laundry a stamp can hardly be considered a peddling payment without also being a crocodile a skill is a meteorologys fan their scent was in this moment a hidden feeling the competitor of a bacon becomes a boxlike cougar",
    "a broadband jam is a network of the mind one cannot separate chickens from glowing periods a production is a faucet from the right perspective the lines could be said to resemble zincoid females a deborah is a tractors whale cod are elite japans some posit the wiglike norwegian to be less than plashy a pennoned windchimes burst comes with it the thought that the printed trombone is a supply relations are restless tests",
    "in recent years some teeming herons are thought of simply as numbers nowhere is it disputed that an unlaid fur is a marble of the mind far from the truth few can name a glossy lier that isnt an ingrate bone the chicken is a giraffe they were lost without the abscessed leek that composed their fowl an interviewer",
  
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
const button = document.getElementById('myButton');

// Function to handle button click
const handleClick = () => {
  // Perform desired actions when the button is clicked
  console.log('Button clicked!');
};

// Add click event listener to the button
button.addEventListener('click', handleClick);

// Function to handle Escape key press
const handleKeyPress = (event) => {
  if (event.key === 'Escape') {
    // Trigger button click event
    button.click();
  }
};

// Add keydown event listener to the document
document.addEventListener('keydown', handleKeyPress);