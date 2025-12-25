// クイズアプリのメインロジック

class OverwatchPerkQuiz {
    constructor() {
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.currentQuestion = null;
        this.allQuestions = [];
        this.usedQuestions = [];

        this.initializeElements();
        this.initializeQuestions();
        this.attachEventListeners();
        this.loadNewQuestion();
    }

    initializeElements() {
        // DOM要素の取得
        this.heroNameEl = document.getElementById('hero-name');
        this.perkNameEl = document.getElementById('perk-name');
        this.scoreEl = document.getElementById('score');
        this.correctEl = document.getElementById('correct');
        this.incorrectEl = document.getElementById('incorrect');
        this.feedbackEl = document.getElementById('feedback');
        this.leftBtn = document.getElementById('left-btn');
        this.rightBtn = document.getElementById('right-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
    }

    initializeQuestions() {
        // すべてのヒーローとパークから問題を生成
        this.allQuestions = [];
        heroData.forEach(heroObj => {
            heroObj.perks.forEach(perk => {
                this.allQuestions.push({
                    hero: heroObj.hero,
                    perkName: perk.name,
                    correctPosition: perk.position
                });
            });
        });
    }

    attachEventListeners() {
        this.leftBtn.addEventListener('click', () => this.checkAnswer('left'));
        this.rightBtn.addEventListener('click', () => this.checkAnswer('right'));
        this.nextBtn.addEventListener('click', () => this.loadNewQuestion());
        this.restartBtn.addEventListener('click', () => this.restart());
    }

    loadNewQuestion() {
        // 使用可能な問題がなくなったらリセット
        if (this.usedQuestions.length >= this.allQuestions.length) {
            this.usedQuestions = [];
        }

        // 未使用の問題からランダムに選択
        let availableQuestions = this.allQuestions.filter(
            q => !this.usedQuestions.includes(q)
        );

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        this.currentQuestion = availableQuestions[randomIndex];
        this.usedQuestions.push(this.currentQuestion);

        // 画面の更新
        this.heroNameEl.textContent = this.currentQuestion.hero;
        this.perkNameEl.textContent = this.currentQuestion.perkName;
        this.feedbackEl.textContent = '';
        this.feedbackEl.className = 'feedback';

        // ボタンの状態をリセット
        this.leftBtn.disabled = false;
        this.rightBtn.disabled = false;
        this.nextBtn.style.display = 'none';
    }

    checkAnswer(selectedPosition) {
        const isCorrect = selectedPosition === this.currentQuestion.correctPosition;

        // ボタンを無効化
        this.leftBtn.disabled = true;
        this.rightBtn.disabled = true;

        // 結果を表示
        if (isCorrect) {
            this.correct++;
            this.score += 10;
            this.feedbackEl.textContent = '🎉 正解！';
            this.feedbackEl.className = 'feedback correct';
        } else {
            this.incorrect++;
            const correctSide = this.currentQuestion.correctPosition === 'left' ? '左' : '右';
            this.feedbackEl.textContent = `❌ 不正解... 正解は「${correctSide}」でした`;
            this.feedbackEl.className = 'feedback incorrect';
        }

        // スコアを更新
        this.updateScore();

        // 次の問題ボタンを表示
        this.nextBtn.style.display = 'block';
    }

    updateScore() {
        this.scoreEl.textContent = this.score;
        this.correctEl.textContent = this.correct;
        this.incorrectEl.textContent = this.incorrect;
    }

    restart() {
        // 確認ダイアログ
        if (this.correct > 0 || this.incorrect > 0) {
            const confirmed = confirm('スコアをリセットしてやり直しますか？');
            if (!confirmed) return;
        }

        // スコアとデータをリセット
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.usedQuestions = [];

        this.updateScore();
        this.loadNewQuestion();
    }
}

// アプリケーションの起動
document.addEventListener('DOMContentLoaded', () => {
    new OverwatchPerkQuiz();
});
