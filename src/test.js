/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Alert from "./Alert";

export default function Main() {
    let wordList = [
        { word: "python", hint: "programming language" },
        { word: "guitar", hint: "a musical instrument" },
        { word: "aim", hint: "a purpose or intention" },
        { word: "venus", hint: "planet of our solar system" },
        { word: "gold", hint: "a yellow precious metal" },
        { word: "ebay", hint: "online shopping site" },
        { word: "golang", hint: "programming language" },
        { word: "coding", hint: "related to programming" },
        { word: "matrix", hint: "science fiction movie" },
        { word: "bugs", hint: "related to programming" },
        { word: "avatar", hint: "epic science fiction film" },
        { word: "gif", hint: "a file format for image" },
        { word: "mental", hint: "related to the mind" },
        { word: "map", hint: "diagram represent of an area" },
        { word: "island", hint: "land surrounded by water" },
        { word: "hockey", hint: "a famous outdoor game" },
        { word: "chess", hint: "related to a indoor game" },
        { word: "viber", hint: "a social media app" },
        { word: "github", hint: "code hosting platform" },
        { word: "png", hint: "a image file format" },
        { word: "silver", hint: "precious greyish-white metal" },
        { word: "mobile", hint: "an electronic device" },
        { word: "gpu", hint: "computer component" },
        { word: "java", hint: "programming language" },
        { word: "google", hint: "famous search engine" },
        { word: "venice", hint: "famous city of waters" },
        { word: "excel", hint: "microsoft product for windows" },
        { word: "mysql", hint: "a relational database system" },
        { word: "nepal", hint: "developing country name" },
        { word: "flute", hint: "a musical instrument" },
        { word: "crypto", hint: "related to cryptocurrency" },
        { word: "tesla", hint: "unit of magnetic flux density" },
        { word: "mars", hint: "planet of our solar system" },
        { word: "proxy", hint: "related to server application" },
        { word: "email", hint: "related to exchanging message" },
        { word: "html", hint: "markup language for the web" },
        { word: "air", hint: "related to a gas" },
        { word: "idea", hint: "a thought or suggestion" },
        { word: "server", hint: "related to computer or system" },
        { word: "svg", hint: "a vector image format" },
        { word: "jpeg", hint: "a image file format" },
        { word: "search", hint: "act to find something" },
        { word: "key", hint: "small piece of metal" },
        { word: "egypt", hint: "a country name" },
        { word: "joker", hint: "psychological thriller film" },
        { word: "dubai", hint: "developed country name" },
        { word: "photo", hint: "representation of person or scene" },
        { word: "nile", hint: "largest river in the world" },
        { word: "rain", hint: "related to a water" },
    ];
    const [wrongLetter, setwrongLetter] = useState('');
    const [guessLeft, setguessLeft] = useState('');
    const [hintTag, sethintTag] = useState('');
    const [inputs, setinputs] = useState([]);
    const [word, setword] = useState('');
    const [render, setrender] = useState(true);
    const [inputdisabled, setinputdisabled] = useState(true);
    const [maxGuesses, setmaxGuesses] = useState('');
    const [incorrectLetters, setincorrectLetters] = useState([]);
    const [correctLetters, setcorrectLetters] = useState([]);
    const [alertactive, setalertactive] = useState([false, '', '']);
    const typingInput = document.querySelector(".typing-input");
    function randomWord() {
        const ranItem = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(ranItem);
        setword([...ranItem.word]);
        setmaxGuesses(ranItem.word.length >= 5 ? 8 : 6);
        setincorrectLetters([]);
        setcorrectLetters([]);
        sethintTag(ranItem.hint);
        setguessLeft(ranItem.word.length >= 5 ? 8 : 6);
        setwrongLetter([]);
        let temp = [];
        for (let i = 0; i < ranItem.word.length; i++) {
            temp.push('');
        }
        setinputs(temp);
        setinputdisabled(true);
    }
    const initGame = (letter) => {
        let key = letter.toLowerCase();
        console.log(incorrectLetters);
        console.log(correctLetters);
        console.log(maxGuesses);
        if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(key) && !correctLetters.includes(key)) {
            if (word.includes(key)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === key) {
                        let temp1 = correctLetters;
                        temp1.push(key);
                        setcorrectLetters(temp1);
                        // setcorrectLetters(...correctLetters, key)
                        let temp = inputs;
                        temp[i] = key;
                        setinputs(temp);
                        if ([...correctLetters, key].length === word.length) {
                            setinputdisabled(true);
                            setalertactive([true, 'Success', `Congrats! You found the word ${word.toUpperCase()}`]);
                            randomWord();
                        }
                        return 0;
                    }
                }
            } else {
                setmaxGuesses(maxGuesses - 1);
                let temp2 = incorrectLetters;
                temp2.push(key);
                setincorrectLetters(temp2);
                if (maxGuesses < 1) {
                    setinputdisabled(true);
                    setalertactive([true, 'Error', "Game over! You don't have remaining guesses"]);
                    let temp = [];
                    for (let i = 0; i < word.length; i++) {
                        temp.push(word[i]);
                    }
                    setinputs(temp);
                    setTimeout(() => {
                        randomWord();
                    }, 5000);
                }
            }
            setguessLeft(maxGuesses);
            setwrongLetter(incorrectLetters);
            setinputdisabled(true);
        }
    }
    document.onkeydown = (event) => {
        // typeInput(event.key);
        typingInput.focus();
    }
    const typeInput = (letter) => {
        if (inputdisabled) {
            initGame(letter.toLowerCase());
        }
    }
    useEffect(() => {
        if (render) {
            // async function fetchData() {
            //   }
            // }
            // fetchData();
            const ranItem = wordList[Math.floor(Math.random() * wordList.length)];
            console.log(ranItem);
            setword(ranItem.word);
            setmaxGuesses(ranItem.word.length >= 5 ? 8 : 6);
            setincorrectLetters([]);
            setcorrectLetters([]);
            sethintTag(ranItem.hint);
            setguessLeft(ranItem.word.length >= 5 ? 8 : 6);
            setwrongLetter([]);
            let temp = [];
            for (let i = 0; i < ranItem.word.length; i++) {
                temp.push('');
            }
            setinputs(temp);
            setinputdisabled(true);
            setrender(false);
        }
    }, [render]);
    return (
        <>
            <Alert alertactive={alertactive} />
            <div className="wrapper sm:text-[25px] text-[22px] sm:w-auto w-full bg-[#ffffff1a] shadow-[0_20px_50px_#00000026] border border-[#ffffff80] backdrop-blur-[5px] rounded-[10px] md:rounded-[1vw]">
                <h1 className='sm:text-[25px] text-[22px] font-medium p-[16px_20px] sm:p-[20px_25px] border-b border-[#ffffff80]'>Guess the Word</h1>
                <div className="content sm:m-[25px_25px_25px] m-[25px_auto_25px] grid justify-items-center gap-5">
                    <input type="text" className="typing-input pointer-events-none absolute z-[-999] opacity-0" value={``} maxLength={1} onInput={(event) => { typeInput(event.target.value); }} />
                    <p className="hint">Hint: <span>{hintTag}</span></p>
                    <div className="inputs flex flex-wrap justify-center gap-1" onClick={() => { typingInput.focus() }}>
                        {inputs.map((object, i) =>
                            <input type="text" className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] font-medium text-[#1ba98c] text-center md:rounded-[0.5vw] rounded-[5px] border border-tkd2 pointer-events-none uppercase" disabled key={i} value={object} />
                        )}
                    </div>
                    {/* <div className="details"> */}
                    <p className="guess-left">Remaining guesses: <span>{guessLeft}</span></p>
                    <p className="wrong-letter">Wrong letters: <span>{wrongLetter}</span></p>
                    {/* </div> */}
                    <button className="reset-btn active:scale-[0.9] tracking-[1px] uppercase w-fit xl:p-[2vh_2vw] bg-backgroundcolor md:rounded-[1vw] rounded-[10px] shadow-[inset_5px_5px_15px_#96969680,inset_-5px_-5px_15px_#00000080,3px_3px_5px_#000000b3] text-white p-[10px] bg-[#1bb295] hover:bg-[#18a589]" onClick={() => { randomWord() }}>Reset Game</button>
                </div>
            </div>
        </>
    )
}
