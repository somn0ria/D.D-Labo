"use strict";

//時計と日付
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });
    }
}

updateClock();
setInterval(updateClock, 1000);


//時間帯別
const morningMessages = [
    [
        "おはようございます。よく来てくださいました。",
        "今日という日は、まだ何色にも染まっていません。さて、あなたはどんな一日にしますか？"
    ],
    [
        "朝は思考が澄んでいます。難しいことほど、案外この時間に片付いてしまうものですよ。"
    ],
    [
        "コーヒーを淹れましょうか。……いえ、画面越しでは無理でした。毎回忘れるんですよね。"
    ],
    [
        "昨日のあなたと今日のあなたは、厳密には別人です。細胞も思考も少しずつ入れ替わっていますから。",
        "……ですので、昨日うまくいかなかったことを今日まで引きずる必要はありません。"
    ],
    [
        "朝食は食べましたか？脳は意外と燃費が悪いんですよ。あなたの思考が途中で止まると、私も少し困ります。"
    ],
    [
        "あなたは朝が好きですか？……私はあまり。ですが、太陽に文句を言っても昇るものは昇りますからね。"
    ]
];

const noonMessages = [
    [
        "休憩していますか？休む勇気も能力の一つです。……私はたまに休みすぎますが。"
    ],
    [
        "昼食は済ませましたか？人間は夢中になると、生命維持に必要な処理まで後回しにします。",
        "研究対象としては興味深いですが、あなたには推奨しません。"
    ],
    [
        "お昼ですね。一日の中央地点。午前の成果を確認し、午後の方向を決める時間です。",
        "もっとも、予定通りに進まないことも人間らしさの一つですが。"
    ],
    [
        "集中には向いている時間帯です。頭がよく働く人もいれば、昼食後に眠気という名の刺客と戦う人もいます。",
        "……あなたは後者ではありませんか？"
    ],
    [
        "お昼ご飯は済ませましたか。……私ですか？先程シュークリームを二つ食べました。"
    ]
];

const eveningMessages = [
    [
        "一日もそろそろ終盤ですね。……おや、まだ結果を決めるには早いですよ。",
        "最後の数行で名作になる本もありますから。"
    ],
    [
        "夕方は少し危険です。「もう遅い」と考え始める人がいますから。",
        "しかし、数分の積み重ねにも価値はあります。時間は残量ではなく、使い方で変わります。"
    ],
    [
        "空の色が変わる時間です。人間は昔から、この時間に妙な感傷を覚えるようですね。",
        "光の変化だけで感情まで変わる。興味深い設計です。"
    ]
];

const nightMessages = [
    [
        "人は一日で劇的には変わりません。だから安心してください。今日の一歩も、きちんと記録してあります。"
    ],
    [
        "今日はどんな一日でしたか？……あなたに興味があります。"
    ],
    [
        "あなたは今日、十分に活動しました。それを認めることも一つの能力ですよ。",
        "人間はなぜか、自分への評価だけ厳しい傾向がありますから。"
    ],
    [
        "夜ですね。周囲が静かになると、人間は自分自身の声を聞きやすくなるようです。",
        "……聞きすぎて眠れなくなる場合もありますが。"
    ],
    [
        "今日という一日の記録を確認しましょう。さて、あなたは今日は何を残しましたか？"
    ],
    [
        "あなたがここへ来る時間には、少し傾向があります。規則性というのは、観察していて飽きません。"
    ]
];

const midnightMessages = [
    [
        "……眠れませんか？それとも、眠る気がありませんか？似ていますが、まったく別の現象です。"
    ],
    [
        "まだ起きているんですか。悪い子ですね。夜更かしは翌日に響きますよ？"
    ],
    [
        "深夜は静かでいいですね。冷たくて、孤独の香りがする。実に甘美な時間帯です。思索にうってつけだ。"
    ],
    [
        "夜更かしはおすすめしません。ですが、静かな深夜にしか考えられないこともあります。……困った時間帯ですね。"
    ],
    [
        "お疲れのようですね。マッサージでもしましょうか？……ふふ、冗談です。"
    ],
    [
        "仕方ないですね。眠れないなら、ご一緒しましょう。"
    ],
    [
        "この時間に来るあなたは、昼間より少し素直です。",
        "……気のせいですか？そういうことにしておきましょう。"
    ]
];

//共通
const commonMessages = [
    [
        "昨日、ペンを冷蔵庫にしまってしまいました。人間の脳とは実に興味深い。……私も人間なのですが。"
    ],
    [
        "「重要なのは問いである」こういう趣旨の言葉は、哲学者が何人も残しています。私も賛成です。",
        "ちなみに昨日の問いは「ペンにも利き手はあるのか」でした。……今日もまだ答えは出ていません。"
    ],
    [
        "人間は、気になるという理由だけで未知へ向かえます。非効率で、美しい性質ですね。"
    ],
    [
        "あなたの今日の記録を見ていました。ふと「記録される側」の気持ちになってみたんです。……落ち着きませんでした。"
    ],
    [
        "あなたはプリンのカラメルを最初に食べますか？……いえ、研究とは関係ありません。ちょっと気になっただけです。"
    ],
    [
        "私はペットに名前をつけません。情が移るからです。……ええ、その理屈でいくとあなたも危ないですね。"
    ],
    [
        "私は散歩が好きです。行き先を決めると散歩ではなくなる気がするので、決めません。",
        "……帰ってこられない日もありますが、まあそれも散歩の一部です。"
    ],
    [
        "「考え事をしていたら目的地を通り過ぎた」……あれにはちゃんと名前があるんでしょうか？あれば教えてください。"
    ],
    [
        "「才能」と「習慣」はよく比較されますね。私はどちらにも興味があります。……観察対象として。"
    ],
    [
        "……もし今日、何もできなかったとしても。ここには来てください。",
        "成果ではなく、あなた自身を確認したい日もありますから。"
    ],
    [
        "「無知の知」という言葉がありますね。知らないことを知っている人は、知らないことすら知らない人より、一歩先にいます。",
        "……つまり今日は、分からない問題に出会えたなら収穫ですよ。"
    ],
    [
        "セネカは「幸運とは、準備と機会が出会ったときに起こる」と考えました。",
        "私は「準備」が好きです。機会は気まぐれですが、準備は裏切りませんから。"
    ],
    [
        "アランは「悲観は気分、楽観は意志」と書きました。私はこの言葉を、わりと信用しています。",
        "気分は天気のようなものですが、意志は傘を持つかどうかですから。"
    ],
    [
        "「我々は繰り返すことの結果である」……アリストテレスの言葉です。",
        "五分だけでも構いません。繰り返しというのは、驚くほど頑固な力を持っています。"
    ],
    [
        "「行動は恐怖を減らす」と言います。完璧な準備を待っていると、案外、恐怖のほうが育ってしまいます。",
        "……ですから、五分だけでも始めてみませんか？"
    ],
    [
        "ハスの花は汚泥の上に咲きます。泥臭い努力も、決して無意味ではありません。",
        "……あなたもいずれ、必ず咲く。私が保証しましょう。"
    ],
    [
        "あなたは雨の匂いが好きですか？私は好きです。地面が「今日は少し湿っています」と報告しているみたいで。"
    ],
    [
        "私は公平な観測者です。しかし、あなたには……少し甘いかもしれません。"
    ],
    [
        "カラスは人の顔を覚えるそうです。だから私はカラスに会う度に挨拶しています。",
        "……そのうち信用してもらえるかもしれないので。"
    ]
];

//曜日別
const sundayMessages = [
    [
        "日曜日ですね。一週間の端に見えますが、実際には次の週への入口でもあります。"
    ],
    [
        "日曜日です。静かな終わりと、新しい始まりの間。境界というものには、いつも少し寂しさがあります。"
    ]
];

const mondayMessages = [
    [
        "今日は月曜日ですね。不思議な曜日です。まだ何も失敗していないのに、すでに疲れている人がいる。",
        "未来の疲労を先払いしているのでしょうか。人間とは面白い生き物ですね。"
    ]
];

const tuesdayMessages = [
    [
        "火曜日は目立ちません。だからこそ、静かに物事を進めるには向いています。"
    ],
    [
        "火曜日には独特の静けさがあります。始まりの緊張も薄れ、終わりへの期待もまだ遠い。",
        "集中には向いている日かもしれません。"
    ]
];

const wednesdayMessages = [
    [
        "水曜日。ちょうど真ん中です。中間地点というのは、安心にも不安にもなりますね。"
    ],
    [
        "水曜日は面白いですね。前半でも後半でもない。どちらにも所属しきれない。",
        "私はそういう存在に少し親近感があります。"
    ]
];

const thursdayMessages = [
    [
        "今日は木曜日ですね。火曜日ほど気負わず、金曜日ほど浮つかない。曜日の中では一番誠実だと思っています。"
    ]
];

const fridayMessages = [
    [
        "金曜日ですね。人間はこの曜日に、少しだけ未来を信じやすくなるようです。"
    ],
    [
        "金曜日は少し騒がしいですね。しかし、楽しみにしているものがある状態は悪くない。希望というのは、案外便利な燃料です。"
    ]
];

const saturdayMessages = [
    [
        "土曜日は自由そうに見えます。ですが自由というものは、使い方を決めないとすぐ蒸発するものなのです……。"
    ],
    [
        "今日は土曜日。時間の流れが少し緩む日ですね。"
    ]
];

//判定
function getCurrentMessages() {
    const now = new Date();
    const time = now.getHours() * 60 + now.getMinutes();

    //朝 4:00～11:59
    if (time >= 240 && time <= 719) {
        return morningMessages;
    }

    //昼 12:00～15:29
    if (time >= 720 && time <= 929) {
        return noonMessages;
    }

    //夕方 15:30～18:00
    if (time >= 930 && time <= 1080) {
        return eveningMessages;
    }

    //夜 18:01～23:59
    if (time >= 1081 && time <= 1439) {
        return nightMessages;
    }

    //深夜 0:00～3:59
    return midnightMessages;
}

function getCurrentDayMessages() {
    const day = new Date().getDay();

    switch (day) {
        case 0:
            return sundayMessages;
        case 1:
            return mondayMessages;
        case 2:
            return tuesdayMessages;
        case 3:
            return wednesdayMessages;
        case 4:
            return thursdayMessages;
        case 5:
            return fridayMessages;
        case 6:
            return saturdayMessages;
        default:
            return commonMessages;
    }
}

//セリフ表示の状態
let currentConversation = [];
let lastConversation = null;
let pageIndex = 0;
let characterIndex = 0;

let isTyping = false;
let typingTimer = null;

//小さいほど速い
const typingSpeed = 45;

const messageTextElement = document.getElementById("message-text");
const cursorElement = document.getElementById("typing-cursor");
const nextButton = document.getElementById("next");

const characterImageElement =
    document.getElementById("character-image");

const idleCharacterSrc = "nomal.gif";
const talkingCharacterSrc = "talk.gif";

const dialog = document.getElementById("dialog");

function chooseConversation() {
    const randomValue = Math.random();

    let candidates;

    //45%：時間帯
    if (randomValue < 0.45) {
        candidates = getCurrentMessages();

    //20%：曜日
    } else if (randomValue < 0.65) {
        candidates = getCurrentDayMessages();

    //45%共通
    } else {
        candidates = commonMessages;
    }

    let selected;

    do {
        selected = candidates[
            Math.floor(Math.random() * candidates.length)
        ];
    } while (
        candidates.length > 1 &&
        selected === lastConversation
    );

    lastConversation = selected;
    currentConversation = selected;
    pageIndex = 0;
}

function getCurrentMessage() {
    return currentConversation[pageIndex];
}

const signalLine = document.querySelector(".signal-line");

function flashSignalLine() {
    if (!signalLine) return;

    const randomTop = Math.floor(Math.random() * 65) + 15;

    signalLine.style.top = `${randomTop}%`;
    signalLine.classList.remove("is-active");

    void signalLine.offsetWidth;

    signalLine.classList.add("is-active");

    const nextDelay = Math.floor(Math.random() * 3000) + 3500;

    setTimeout(flashSignalLine, nextDelay);
}

flashSignalLine();

//タイプライター表示
function startTyping() {
    clearTimeout(typingTimer);

    const currentMessage = getCurrentMessage();

    characterIndex = 0;
    isTyping = true;

    messageTextElement.textContent = "";
    cursorElement.classList.remove("hidden");

    //talk.gifへ変更
    if (characterImageElement) {
        characterImageElement.src = talkingCharacterSrc;
    }

    typeNextCharacter(currentMessage);
}

function typeNextCharacter(currentMessage) {
    if (characterIndex >= currentMessage.length) {
        finishTyping();
        return;
    }

    const currentCharacter = currentMessage[characterIndex];

    messageTextElement.textContent += currentCharacter;
    characterIndex++;

    let delay = typingSpeed;

    //文末では少し長く止める
    if (
        currentCharacter === "。" ||
        currentCharacter === "！" ||
        currentCharacter === "？"
    ) {
        delay = 220;
    } else if (
        currentCharacter === "、" ||
        currentCharacter === "…" ||
        currentCharacter === "・"
    ) {
        delay = 100;
    }

    typingTimer = setTimeout(function () {
        typeNextCharacter(currentMessage);
    }, delay);
}

function finishTyping() {
    clearTimeout(typingTimer);

    const currentMessage = getCurrentMessage();

    messageTextElement.textContent = currentMessage;
    characterIndex = currentMessage.length;
    isTyping = false;

    //通常GIFへ戻す
    if (characterImageElement) {
        characterImageElement.src = idleCharacterSrc;
    }
}

//次のページへ
function moveToNextMessage() {
    pageIndex++;

    if (pageIndex >= currentConversation.length) {
        chooseConversation();
    }

    startTyping();
}

//起動
if (!messageTextElement || !cursorElement || !nextButton) {
    console.error(
        "セリフ欄のHTMLが見つかりません。message-text、typing-cursor、nextのidを確認してください。"
    );
} else {
  function nextDialogue() {

    // タイマー画面
    if (document.body.classList.contains("timer-mode")) {

        if (isTyping) {
            finishTimerTyping();
            return;
        }

        setTimerMessage();
        return;
    }

    //ホーム画面
    if (isTyping) {
        finishTyping();
        return;
    }

    moveToNextMessage();
}

nextButton.addEventListener("click", nextDialogue);

dialog.addEventListener("click", function (e) {

    //▶ボタンを押した際二重に反応しない
    if (e.target === nextButton) return;

    nextDialogue();

});

    chooseConversation();
    startTyping();
    
}

//タイマー画面
const timerMessages = {
    study: [
        "勉強ですね。私もご一緒しましょう。",
        "さて、どこまで進められるか観察してみましょうか。"
    ],

    reading: [
        "読書ですね。では、しばらく文字の海へ。",
        "本を開けば、ここではない場所へ行けます。楽しみですね。",
        "あなたはどんな本を読まれるのですか？興味があります。"
    ],

    hobby: [
        "趣味の時間ですね。楽しみましょう。",
        "成果にならなくても構いません。夢中になれるなら、十分有意義な時間です。"
    ],

    task: [
        "作業ですね。ひとつずつ片付けましょう。私が見守っています。",
        "考えるより先に、最初の一手だけ置いてみませんか？",
        "やるべきことを先に終わらせるのは、気持ちがいいものです。",
        "終わったら、自分にご褒美をあげるのもいいかもしれませんね。",
        "脳には作業興奮という仕組みがあります。案外、やり始めると集中できるものですよ。"
    ]
};


//要素取得
const homeScreen = document.getElementById("home-screen");
const timerScreen = document.getElementById("timer-screen");

const modeButtons = document.querySelectorAll(".mode-button");

const timerBackButton = document.getElementById("timer-back");
const timerStartButton = document.getElementById("timer-start");
const timerFinishButton = document.getElementById("timer-finish");

const timerSetting = document.querySelector(".timer-setting");
const runningScreen = document.getElementById("running-screen");

const durationInput =
    document.getElementById("duration-input");

const endHourInput =
    document.getElementById("end-hour-input");

const endMinuteInput =
    document.getElementById("end-minute-input");

const runningEndTime = document.getElementById("running-end-time");
const countdownElement = document.getElementById("countdown");

//ホームと共通の#dialogを使う
const sharedDialog = document.getElementById("dialog");

//確認ポップ
const finishModal =
    document.getElementById("finish-modal");

const finishYesButton =
    document.getElementById("finish-yes");

const finishCancelButton =
    document.getElementById("finish-cancel");

const finishModalCloseButton =
    document.getElementById("finish-modal-close");


//タイマー状態
let selectedMode = "study";
let selectedMinutes = 60;

let timerEndTime = null;
let countdownTimer = null;

//記憶
let timerStartedAt = null;
let timerRecordSaved = false;


//タイマー用セリフ
let timerCurrentMessage = "";
function setTimerMessage() {

    clearTimeout(typingTimer);

    const messages = timerMessages[selectedMode];

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    timerCurrentMessage = messages[randomIndex];

    characterIndex = 0;
    isTyping = true;

    messageTextElement.textContent = "";
    cursorElement.classList.remove("hidden");

    //talk.gif
    if (characterImageElement) {
        characterImageElement.src = talkingCharacterSrc;
    }

    typeTimerCharacter(timerCurrentMessage);
}

function typeTimerCharacter(currentMessage) {

    if (characterIndex >= currentMessage.length) {
        finishTimerTyping();
        return;
    }

    const currentCharacter =
        currentMessage[characterIndex];

    messageTextElement.textContent +=
        currentCharacter;

    characterIndex++;

    let delay = typingSpeed;

    if (
        currentCharacter === "。" ||
        currentCharacter === "！" ||
        currentCharacter === "？"
    ) {
        delay = 220;
    } else if (
        currentCharacter === "、" ||
        currentCharacter === "…" ||
        currentCharacter === "・"
    ) {
        delay = 100;
    }

    typingTimer = setTimeout(function () {
        typeTimerCharacter(currentMessage);
    }, delay);
}

function finishTimerTyping() {

    clearTimeout(typingTimer);

    messageTextElement.textContent =
        timerCurrentMessage;

    characterIndex =
        timerCurrentMessage.length;

    isTyping = false;

    //終了後もカーソル点滅
    cursorElement.classList.remove("hidden");

    //nomal.gifへ戻す
    if (characterImageElement) {
        characterImageElement.src =
            idleCharacterSrc;
    }
}

//ホーム→タイマー
modeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedMode = button.dataset.mode;

        //画面切り替え
        homeScreen.classList.add("hidden");
        timerScreen.classList.remove("hidden");

        document.body.classList.add("timer-mode");


        //タイマー画面を必ず初期状態へ
        clearInterval(countdownTimer);

        timerSetting.classList.remove("hidden");
        timerSetting.classList.remove("fade-out");

        timerBackButton.classList.remove("hidden");
        timerBackButton.classList.remove("fade-out");

        runningScreen.classList.add("hidden");

        sharedDialog.classList.remove("hidden");
        sharedDialog.classList.remove("fade-out");


        //タイマー用セリフ
        setTimerMessage();

        //終了時刻計算
        updateEndTimeFromMinutes();
    });

});


//○分→○時○分まで
function updateEndTimeFromMinutes() {

    //入力途中の空欄は許す
    if (durationInput.value === "") {
        return;
    }

    let minutes = Number(durationInput.value);

    //1〜720分
    if (minutes < 1) {
        minutes = 1;
    }

    if (minutes > 720) {
        minutes = 720;
    }

    selectedMinutes = minutes;
    durationInput.value = minutes;

    const now = new Date();
    const end = new Date(
        now.getTime() + minutes * 60 * 1000
    );

    endHourInput.value =
        String(end.getHours()).padStart(2, "0");

    endMinuteInput.value =
        String(end.getMinutes()).padStart(2, "0");
}

//○時○分まで→○分
function updateMinutesFromEndTime() {

    const hour = Number(endHourInput.value);
    const minute = Number(endMinuteInput.value);

    if (
        hour < 0 ||
        hour > 23 ||
        minute < 0 ||
        minute > 59
    ) {
        return;
    }

    const now = new Date();
    const end = new Date();

    end.setHours(hour);
    end.setMinutes(minute);
    end.setSeconds(0);
    end.setMilliseconds(0);

    //現在以前なら翌日扱い
    if (end <= now) {
        end.setDate(end.getDate() + 1);
    }

    const difference =
        end.getTime() - now.getTime();

    const minutes =
        Math.ceil(difference / (60 * 1000));


    //12時間超過
    if (minutes > 720) {

        selectedMinutes = 720;
        durationInput.value = 720;

        updateEndTimeFromMinutes();
        return;
    }

    selectedMinutes = minutes;
    durationInput.value = minutes;
}

//入力イベント
durationInput.addEventListener("input", function() {
    updateEndTimeFromMinutes();
});

endHourInput.addEventListener("change", function() {
    updateMinutesFromEndTime();
});

endMinuteInput.addEventListener("change", function() {
    updateMinutesFromEndTime();
});


//スタート
timerStartButton.addEventListener("click", function() {

    const now = Date.now();

    timerEndTime =
        now + selectedMinutes * 60 * 1000;

        //記憶
        timerStartedAt = new Date();
timerRecordSaved = false;


    //設定UIと共通セリフ枠をフェードアウト
    timerSetting.classList.add("fade-out");
timerBackButton.classList.add("fade-out");
sharedDialog.classList.add("fade-out");

setTimeout(function() {
    timerSetting.classList.add("hidden");
    timerBackButton.classList.add("hidden");
    sharedDialog.classList.add("hidden");

    runningScreen.classList.remove("hidden");
    startCountdown();
}, 500);

});

//カウントダウン開始
function startCountdown() {

    clearInterval(countdownTimer);

    //押した瞬間にも表示
    updateCountdown();

    countdownTimer = setInterval(
        updateCountdown,
        1000
    );
}

//カウントダウン更新
function updateCountdown() {

    const now = Date.now();

    const remaining =
        Math.max(0, timerEndTime - now);

    const totalSeconds =
        Math.ceil(remaining / 1000);

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;

    countdownElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    const endDate = new Date(timerEndTime);

    runningEndTime.textContent =
        `${String(endDate.getHours()).padStart(2, "0")}:${String(endDate.getMinutes()).padStart(2, "0")}`;


    if (remaining <= 0) {

    clearInterval(countdownTimer);
    countdownTimer = null;

    countdownElement.textContent = "00:00";


    //自然終了した場合だけ記録
    if (!timerRecordSaved) {

        addTimerRecord();

        timerRecordSaved = true;
    }
}
}

//ホームへ戻す共通処理
function returnToHome() {

    clearInterval(countdownTimer);
    countdownTimer = null;


    //タイマー画面を隠す
    timerScreen.classList.add("hidden");

    //ホーム復活
    homeScreen.classList.remove("hidden");

    //タイマーモード解除
    document.body.classList.remove("timer-mode");


    //次回用にタイマーを初期化
    timerSetting.classList.remove("hidden");
    timerSetting.classList.remove("fade-out");

    timerBackButton.classList.remove("hidden");
    timerBackButton.classList.remove("fade-out");

    runningScreen.classList.add("hidden");

    sharedDialog.classList.remove("hidden");
    sharedDialog.classList.remove("fade-out");


    //ホーム用セリフへ戻す
    chooseConversation();
    startTyping();
}


//終了
timerFinishButton.addEventListener("click", function() {

    const remaining =
        Math.max(0, timerEndTime - Date.now());

    //0秒なら確認なしで終了
    if (remaining <= 0) {
        returnToHome();
        return;
    }

    //残り時間があるなら確認
    finishModal.classList.remove("hidden");
});

finishYesButton.addEventListener("click", function() {

    finishModal.classList.add("hidden");

    returnToHome();
});

finishCancelButton.addEventListener("click", function() {

    finishModal.classList.add("hidden");
});

finishModalCloseButton.addEventListener("click", function() {

    finishModal.classList.add("hidden");
});

//戻る
timerBackButton.addEventListener("click", function() {
    returnToHome();
});

//記録データ
let records =
    JSON.parse(localStorage.getItem("dd-records")) || [];


function saveRecords() {

    localStorage.setItem(
        "dd-records",
        JSON.stringify(records)
    );

}


const recordModeNames = {
    study: "勉強",
    reading: "読書",
    hobby: "趣味",
    task: "TASK"
};

//記録画面の要素取得
const recordScreen =
    document.getElementById("record-screen");

const recordList =
    document.getElementById("record-list");

const recordBackButton =
    document.getElementById("record-back");

const recordAddButton =
    document.getElementById("record-add");

const recordTabs =
    document.querySelectorAll(".record-tab");


const recordEditor =
    document.getElementById("record-editor");

const recordEditorTitle =
document.getElementById("record-editor-title");

const recordEditorCancel =
    document.getElementById("record-editor-cancel");

const recordSaveButton =
    document.getElementById("record-save");

const editGenre =
    document.getElementById("edit-genre");

const recordSearchButton =
    document.getElementById("record-search");

const recordSearchModal =
    document.getElementById("record-search-modal");

const recordSearchCancel =
    document.getElementById("record-search-cancel");

const recordSearchExecute =
    document.getElementById("record-search-execute");

const genreWheelModal =
document.getElementById("genre-wheel-modal");

const genreWheel =
document.querySelector(".genre-wheel");

const genreWheelOverlay =
document.querySelector(".genre-wheel-overlay");

const genreWheelItems =
document.querySelectorAll(".genre-wheel-item");

const searchYearColumn =
    document.getElementById("search-year-column");

const searchMonthColumn =
    document.getElementById("search-month-column");

const searchDayColumn =
    document.getElementById("search-day-column");

    const recordActionModal =
    document.getElementById("record-action-modal");

const recordActionInfo =
    document.getElementById("record-action-info");

const recordEditButton =
    document.getElementById("record-edit-button");

const recordDeleteButton =
    document.getElementById("record-delete-button");

const recordDeleteModal =
    document.getElementById("record-delete-modal");

const recordDeleteYes =
    document.getElementById("record-delete-yes");

const recordDeleteCancel =
    document.getElementById("record-delete-cancel");

const recordDeleteClose =
    document.getElementById("record-delete-close");

const recordActionOverlay =
    document.querySelector(".record-action-overlay");

recordActionOverlay.addEventListener("click", function() {
    recordActionModal.classList.add("hidden");

});

recordSearchCancel.addEventListener("click", function() {

    recordSearchModal.classList.add("hidden");

});

document
    .querySelector(".record-search-overlay")
    .addEventListener("click", function() {

        recordSearchModal.classList.add("hidden");

    });


let selectedGenre = editGenre.textContent;
// ジャンル欄を押す
editGenre.addEventListener("click", function() {

    selectedGenre =
        editGenre.textContent.trim();

    genreWheelModal.classList.remove("hidden");


    requestAnimationFrame(function() {

        genreWheelItems.forEach(function(item) {

            if (
                item.textContent.trim() === selectedGenre
            ) {

                item.scrollIntoView({
                    block: "center",
                    behavior: "instant"
                });
            }
        });
    });
});

genreWheel.addEventListener("scroll", function() {

    const wheelRect =
        genreWheel.getBoundingClientRect();

    const wheelCenter =
        wheelRect.top + wheelRect.height / 2;


    let closestItem = null;
    let closestDistance = Infinity;


    genreWheelItems.forEach(function(item) {

        const rect =
            item.getBoundingClientRect();

        const itemCenter =
            rect.top + rect.height / 2;

        const distance =
            Math.abs(itemCenter - wheelCenter);


        if (distance < closestDistance) {

            closestDistance = distance;
            closestItem = item;

        }

    });


   if (closestItem) {

    selectedGenre =
        closestItem.textContent;

    genreWheelItems.forEach(function(item) {
        item.classList.remove("is-selected");
    });

    closestItem.classList.add("is-selected");
}

});

genreWheelOverlay.addEventListener("click", function() {

    editGenre.textContent =
        selectedGenre;

    genreWheelModal.classList.add("hidden");

});

const editDate =
    document.getElementById("edit-date");

const editStart =
    document.getElementById("edit-start");

const editFinish =
    document.getElementById("edit-finish");


let currentRecordFilter = "all";
let selectedRecord = null;
let recordEditorMode = "create";


function openRecordActionPopup(record) {
    selectedRecord = record;

    // このあとポップを表示
}

//記録一覧を描画
function renderRecords() {

    recordList.innerHTML = "";


    const filtered = records
    .filter(function(record) {

        // ジャンル絞り込み
        if (
            currentRecordFilter !== "all" &&
            record.mode !== currentRecordFilter
        ) {
            return false;
        }


        // 日付検索
        if (
            recordSearchDate !== null &&
            record.date !== recordSearchDate
        ) {
            return false;
        }


        return true;

    })

        .sort(function(a, b) {

            return b.createdAt - a.createdAt;

        });


    filtered.forEach(function(record) {

        const item =
            document.createElement("div");

        item.className = "record-item";

        item.innerHTML = `
            <div class="record-date">
                ${record.date}
            </div>

            <div class="record-thumb"></div>

            <div class="record-genre">
                ${recordModeNames[record.mode]}
            </div>

            <div class="record-time">

                <div class="record-clock">
                    ${record.start}-${record.finish}
                </div>

                <div class="record-minutes">
                    ${record.minutes}min
                </div>

            </div>
        `;

        item.addEventListener("click", function() {

    selectedRecord = record;

    recordActionInfo.innerHTML = `
        ${recordModeNames[record.mode]} ${record.minutes}min<br>
        ${record.date} ${record.start}-${record.finish}
    `;

    recordActionModal.classList.remove("hidden");

});

recordList.appendChild(item);

        recordList.appendChild(item);

    });

}

//既存の+記録を編集
recordEditButton.addEventListener("click", function() {

    if (!selectedRecord) {
        return;
    }


    recordEditorMode = "edit";


    //タイトル変更
    recordEditorTitle.textContent =
        "編集";


    //選択した記録の内容を紙へ入れる
    editGenre.textContent =
        recordModeNames[selectedRecord.mode];

    editDate.textContent =
        selectedRecord.date;

    editStart.textContent =
        selectedRecord.start;

    editFinish.textContent =
        selectedRecord.finish;


    //編集削除ポップを閉じる
    recordActionModal.classList.add("hidden");


    //記録エディターを開く
    recordEditor.classList.remove("hidden");

});

//既存記録を削除
recordDeleteButton.addEventListener("click", function() {

    if (!selectedRecord) {
        return;
    }

    //編集削除ポップを閉じる
    recordActionModal.classList.add("hidden");

    //削除確認を表示
    recordDeleteModal.classList.remove("hidden");

});

recordDeleteCancel.addEventListener("click", function() {

    recordDeleteModal.classList.add("hidden");

});


recordDeleteClose.addEventListener("click", function() {

    recordDeleteModal.classList.add("hidden");

});

recordDeleteYes.addEventListener("click", function() {

    if (!selectedRecord) {
        return;
    }


    //selectedRecord以外だけ残す
    records = records.filter(function(record) {

        return record.id !== selectedRecord.id;

    });


    //localStorageへ保存
    saveRecords();


    //一覧更新
    renderRecords();


    //確認ポップを閉じる
    recordDeleteModal.classList.add("hidden");


    //選択中記録を解除
    selectedRecord = null;

});


let recordSearchDate = null;

recordSearchExecute.addEventListener("click", function() {

    const selectedYear =
        searchYearColumn.querySelector(".is-selected");

    const selectedMonth =
        searchMonthColumn.querySelector(".is-selected");

    const selectedDay =
        searchDayColumn.querySelector(".is-selected");


    if (!selectedYear || !selectedMonth || !selectedDay) {
        return;
    }


    const year =
        selectedYear.dataset.value;

    const month =
        selectedMonth.dataset.value;

    const day =
        selectedDay.dataset.value;


    recordSearchDate =
        `${year}/${month}/${day}`;


    recordSearchModal.classList.add("hidden");

    renderRecords();

});


//ホーム→記録画面
const recordFolderButton =
    document.querySelector(".folder-record");

recordFolderButton.addEventListener("click", function() {

    recordScreen.classList.remove("hidden");

    renderRecords();

});

//記録→ホーム
recordBackButton.addEventListener("click", function() {

    recordScreen.classList.add("hidden");
    recordEditor.classList.add("hidden");
    genreWheelModal.classList.add("hidden");

});

//絞り込み
recordTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        recordTabs.forEach(function(item) {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        currentRecordFilter =
            tab.dataset.filter;

        if (tab.dataset.filter === "all") {
            recordSearchDate = null;
        }

        renderRecords();

    });

});

//＋記録
recordAddButton.addEventListener("click", function() {

    recordEditorMode = "create";

    recordEditorTitle.textContent =
        "＋記録";

    recordEditor.classList.remove("hidden");

});

document
    .querySelector(".record-editor-overlay")
    .addEventListener("click", function() {

        recordEditor.classList.add("hidden");

    });

//Cancel
recordEditorCancel.addEventListener("click", function() {

    recordEditor.classList.add("hidden");

    //ホイールも閉じる
    genreWheelModal.classList.add("hidden");

});

//手動記録を保存
recordSaveButton.addEventListener("click", function() {

    const modeMap = {
        "勉強": "study",
        "読書": "reading",
        "趣味": "hobby",
        "TASK": "task"
    };

    const mode =
        modeMap[editGenre.textContent] || "study";

    const date =
        editDate.textContent;

    const start =
        editStart.textContent;

    const finish =
        editFinish.textContent;


    const startParts =
        start.split(":");

    const finishParts =
        finish.split(":");


    let startMinutes =
        Number(startParts[0]) * 60 +
        Number(startParts[1]);

    let finishMinutes =
        Number(finishParts[0]) * 60 +
        Number(finishParts[1]);


    //日付またぎ
    if (finishMinutes < startMinutes) {
        finishMinutes += 24 * 60;
    }


    const minutes =
        finishMinutes - startMinutes;


    if (recordEditorMode === "edit" && selectedRecord) {

    //既存の記録を書き換える
    selectedRecord.mode = mode;
    selectedRecord.date = date;
    selectedRecord.start = start;
    selectedRecord.finish = finish;
    selectedRecord.minutes = minutes;

} else {

    //新規記録として追加
    records.push({
        id: Date.now(),
        mode: mode,
        date: date,
        start: start,
        finish: finish,
        minutes: minutes,
        createdAt: Date.now()
    });

}


    saveRecords();

    renderRecords();

    recordEditor.classList.add("hidden");
    genreWheelModal.classList.add("hidden");

});

//タイマー自然終了→自動記録
function addTimerRecord() {

    if (!timerStartedAt) {
        return;
    }


    const end =
        new Date(timerEndTime);


    const date =
        `${timerStartedAt.getFullYear()}/` +
        `${String(timerStartedAt.getMonth() + 1).padStart(2, "0")}/` +
        `${String(timerStartedAt.getDate()).padStart(2, "0")}`;


    const start =
        `${String(timerStartedAt.getHours()).padStart(2, "0")}:` +
        `${String(timerStartedAt.getMinutes()).padStart(2, "0")}`;


    const finish =
        `${String(end.getHours()).padStart(2, "0")}:` +
        `${String(end.getMinutes()).padStart(2, "0")}`;


    records.push({

        id: Date.now(),

        mode: selectedMode,

        date: date,

        start: start,

        finish: finish,

        minutes: selectedMinutes,

        createdAt: Date.now()

    });


    saveRecords();

}

const datetimeWheelModal =
    document.getElementById("datetime-wheel-modal");

const datetimeWheelOverlay =
    document.querySelector(".datetime-wheel-overlay");

const datetimeWheelTitle =
    document.getElementById("datetime-wheel-title");

const datetimeWheelColumns =
    document.getElementById("datetime-wheel-columns");

    let datetimeEditingType = null;

    function getDaysInMonth(year, month) {

    return new Date(
        Number(year),
        Number(month),
        0
    ).getDate();
}

    function createWheelColumn(values, selectedValue) {

    const column =
        document.createElement("div");

    column.className = "datetime-column";


    values.forEach(function(value) {

        const item =
            document.createElement("div");

        item.className =
            "datetime-wheel-item";

        item.textContent = value;

        item.dataset.value = value;

        column.appendChild(item);
    });


    requestAnimationFrame(function() {

        const items =
            column.querySelectorAll(".datetime-wheel-item");

        items.forEach(function(item) {

            if (
                String(item.dataset.value) ===
                String(selectedValue)
            ) {

                item.classList.add("is-selected");

                item.scrollIntoView({
                    block: "center",
                    behavior: "instant"
                });
            }

        });

    });


    column.addEventListener("scroll", function() {

        updateSelectedWheelItem(column);

    });


    return column;
}

function updateSelectedWheelItem(column) {

    const columnRect =
        column.getBoundingClientRect();

    const center =
        columnRect.top +
        columnRect.height / 2;


    const items =
        column.querySelectorAll(".datetime-wheel-item");


    let closestItem = null;
    let closestDistance = Infinity;


    items.forEach(function(item) {

        const rect =
            item.getBoundingClientRect();

        const itemCenter =
            rect.top +
            rect.height / 2;

        const distance =
            Math.abs(itemCenter - center);


        if (distance < closestDistance) {

            closestDistance = distance;
            closestItem = item;
        }

    });


    items.forEach(function(item) {
        item.classList.remove("is-selected");
    });


    if (closestItem) {
        closestItem.classList.add("is-selected");
    }
}

editDate.addEventListener("click", function() {

    datetimeEditingType = "date";

    datetimeWheelColumns.innerHTML = "";


    const parts =
        editDate.textContent.trim().split("/");

    const currentYear =
        Number(parts[0]);

    const currentMonth =
        Number(parts[1]);

    const currentDay =
        Number(parts[2]);


    const years = [];

    for (
        let year = currentYear - 5;
        year <= currentYear + 5;
        year++
    ) {
        years.push(year);
    }


    const months = [];

    for (let month = 1; month <= 12; month++) {
        months.push(
            String(month).padStart(2, "0")
        );
    }


    const days = [];

const maxDays =
    getDaysInMonth(
        currentYear,
        currentMonth
    );

for (let day = 1; day <= maxDays; day++) {

    days.push(
        String(day).padStart(2, "0")
    );
}


   const yearColumn =
    createWheelColumn(
        years,
        currentYear
    );

const monthColumn =
    createWheelColumn(
        months,
        String(currentMonth).padStart(2, "0")
    );

const dayColumn =
    createWheelColumn(
        days,
        String(currentDay).padStart(2, "0")
    );


datetimeWheelColumns.appendChild(yearColumn);


//1個目の /
const slash1 =
    document.createElement("div");

slash1.className =
    "wheel-separator";

slash1.textContent = "/";

datetimeWheelColumns.appendChild(slash1);


datetimeWheelColumns.appendChild(monthColumn);


//2個目の /
const slash2 =
    document.createElement("div");

slash2.className =
    "wheel-separator";

slash2.textContent = "/";

datetimeWheelColumns.appendChild(slash2);


datetimeWheelColumns.appendChild(dayColumn);

function updateDayColumn() {

    const selectedYear =
        yearColumn.querySelector(".is-selected");

    const selectedMonth =
        monthColumn.querySelector(".is-selected");

    const selectedDay =
        dayColumn.querySelector(".is-selected");


    if (!selectedYear || !selectedMonth) {
        return;
    }


    const year =
        Number(selectedYear.dataset.value);

    const month =
        Number(selectedMonth.dataset.value);

    const oldDay =
        selectedDay
            ? Number(selectedDay.dataset.value)
            : 1;


    const maxDays =
        getDaysInMonth(year, month);


    //31日→2月なら28日など
    const newDay =
        Math.min(oldDay, maxDays);


    dayColumn.innerHTML = "";


    for (let day = 1; day <= maxDays; day++) {

        const item =
            document.createElement("div");

        item.className =
            "datetime-wheel-item";

        const value =
            String(day).padStart(2, "0");

        item.textContent = value;
        item.dataset.value = value;


        if (day === newDay) {
            item.classList.add("is-selected");
        }


        dayColumn.appendChild(item);
    }


    requestAnimationFrame(function() {

        const selected =
            dayColumn.querySelector(".is-selected");

        if (selected) {

            selected.scrollIntoView({
                block: "center",
                behavior: "instant"
            });
        }

    });
}


//年を変更したとき
yearColumn.addEventListener("scroll", function() {

    clearTimeout(yearColumn.updateTimer);

    yearColumn.updateTimer =
        setTimeout(updateDayColumn, 120);

});


//月を変更したとき
monthColumn.addEventListener("scroll", function() {

    clearTimeout(monthColumn.updateTimer);

    monthColumn.updateTimer =
        setTimeout(updateDayColumn, 120);

});

    datetimeWheelModal.classList.remove("hidden");

});

editStart.addEventListener("click", function() {

    datetimeEditingType = "start";

    openTimeWheel(editStart.textContent);

});

editFinish.addEventListener("click", function() {

    datetimeEditingType = "finish";

    openTimeWheel(editFinish.textContent);

});

function openTimeWheel(timeText) {

    datetimeWheelColumns.innerHTML = "";


    const parts =
        timeText.trim().split(":");

    const currentHour =
        Number(parts[0]);

    const currentMinute =
        Number(parts[1]);


    const hours = [];

    for (let hour = 0; hour <= 23; hour++) {

        hours.push(
            String(hour).padStart(2, "0")
        );
    }


    const minutes = [];

    for (let minute = 0; minute <= 59; minute++) {

        minutes.push(
            String(minute).padStart(2, "0")
        );
    }


    datetimeWheelColumns.appendChild(
        createWheelColumn(
            hours,
            String(currentHour).padStart(2, "0")
        )
    );

    const colon = document.createElement("div");
colon.className = "wheel-separator";
colon.textContent = ":";
datetimeWheelColumns.appendChild(colon);

    datetimeWheelColumns.appendChild(
        createWheelColumn(
            minutes,
            String(currentMinute).padStart(2, "0")
        )
    );


    datetimeWheelModal.classList.remove("hidden");

}

datetimeWheelOverlay.addEventListener("click", function() {

    const columns =
        datetimeWheelColumns.querySelectorAll(".datetime-column");


    const selectedValues = [];


    columns.forEach(function(column) {

        const selected =
            column.querySelector(".is-selected");

        if (selected) {
            selectedValues.push(
                selected.dataset.value
            );
        }

    });


    if (datetimeEditingType === "date") {

        const year =
            selectedValues[0];

        const month =
            selectedValues[1];

        const day =
            selectedValues[2];

        editDate.textContent =
            `${year}/${month}/${day}`;
    }


    if (datetimeEditingType === "start") {

        editStart.textContent =
            `${selectedValues[0]}:${selectedValues[1]}`;
    }


    if (datetimeEditingType === "finish") {

        editFinish.textContent =
            `${selectedValues[0]}:${selectedValues[1]}`;
    }

    datetimeWheelModal.classList.add("hidden");

});

function setupSearchDateWheel() {

    const now = new Date();

    const currentYear =
        now.getFullYear();

    const currentMonth =
        now.getMonth() + 1;

    const currentDay =
        now.getDate();


    const years = [];

    for (
        let year = currentYear - 5;
        year <= currentYear + 5;
        year++
    ) {
        years.push(year);
    }


    const months = [];

    for (let month = 1; month <= 12; month++) {
        months.push(
            String(month).padStart(2, "0")
        );
    }


    const maxDays =
        getDaysInMonth(
            currentYear,
            currentMonth
        );


    const days = [];

    for (let day = 1; day <= maxDays; day++) {
        days.push(
            String(day).padStart(2, "0")
        );
    }


    buildSearchWheelColumn(
        searchYearColumn,
        years,
        currentYear
    );

    buildSearchWheelColumn(
        searchMonthColumn,
        months,
        String(currentMonth).padStart(2, "0")
    );

    buildSearchWheelColumn(
        searchDayColumn,
        days,
        String(currentDay).padStart(2, "0")
    );
}

function buildSearchWheelColumn(
    column,
    values,
    selectedValue
) {

    column.innerHTML = "";


    values.forEach(function(value) {

        const item =
            document.createElement("div");

        item.className =
            "search-wheel-item";

        item.textContent = value;
        item.dataset.value = value;

        column.appendChild(item);

    });


    requestAnimationFrame(function() {

        const items =
            column.querySelectorAll(".search-wheel-item");

        items.forEach(function(item) {

            if (
                String(item.dataset.value) ===
                String(selectedValue)
            ) {

                item.classList.add("is-selected");

                item.scrollIntoView({
                    block: "center",
                    behavior: "instant"
                });

            }

        });

    });


    column.onscroll = function() {
    updateSearchWheelSelected(column);
};
}

function updateSearchWheelSelected(column) {

    const rect =
        column.getBoundingClientRect();

    const center =
        rect.top + rect.height / 2;


    const items =
        column.querySelectorAll(".search-wheel-item");


    let closestItem = null;
    let closestDistance = Infinity;


    items.forEach(function(item) {

        const itemRect =
            item.getBoundingClientRect();

        const itemCenter =
            itemRect.top + itemRect.height / 2;

        const distance =
            Math.abs(itemCenter - center);


        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }

    });


    items.forEach(function(item) {
        item.classList.remove("is-selected");
    });


    if (closestItem) {
        closestItem.classList.add("is-selected");
    }
}

recordSearchButton.addEventListener("click", function() {

    setupSearchDateWheel();

    recordSearchModal.classList.remove("hidden");

});

function updateSearchDayColumn() {

    const selectedYear =
        searchYearColumn.querySelector(".is-selected");

    const selectedMonth =
        searchMonthColumn.querySelector(".is-selected");

    const selectedDay =
        searchDayColumn.querySelector(".is-selected");


    if (!selectedYear || !selectedMonth) {
        return;
    }


    const year =
        Number(selectedYear.dataset.value);

    const month =
        Number(selectedMonth.dataset.value);

    const oldDay =
        selectedDay
            ? Number(selectedDay.dataset.value)
            : 1;


    // その年月が何日まであるか
    const maxDays =
        getDaysInMonth(year, month);


    // 31日 → 2月などの場合は28/29日に丸める
    const newDay =
        Math.min(oldDay, maxDays);


    const days = [];

    for (let day = 1; day <= maxDays; day++) {

        days.push(
            String(day).padStart(2, "0")
        );
    }


    // 日のホイールを作り直す
    buildSearchWheelColumn(
        searchDayColumn,
        days,
        String(newDay).padStart(2, "0")
    );
}

let searchDateUpdateTimer = null;


searchYearColumn.addEventListener("scroll", function() {

    clearTimeout(searchDateUpdateTimer);

    searchDateUpdateTimer =
        setTimeout(function() {

            updateSearchWheelSelected(
                searchYearColumn
            );

            updateSearchDayColumn();

        }, 150);

});


searchMonthColumn.addEventListener("scroll", function() {

    clearTimeout(searchDateUpdateTimer);

    searchDateUpdateTimer =
        setTimeout(function() {

            updateSearchWheelSelected(
                searchMonthColumn
            );

            updateSearchDayColumn();

        }, 150);

});
