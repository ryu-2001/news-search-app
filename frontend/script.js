async function searchNews() {
    const query = document.getElementById('query').value.trim();
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');

    resultsDiv.innerHTML = '';
    loadingDiv.style.display = 'block'; // ローディング表示

    if (!query) {
        resultsDiv.innerHTML = '<p>キーワードを入力してください</p>';
        loadingDiv.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/search?q=${query}`);
        const articles = await response.json();
        loadingDiv.style.display = 'none'; // ローディング非表示

        if (articles.length === 0) {
            resultsDiv.innerHTML = '<p>検索結果が見つかりませんでした</p>';
            return;
        }

        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('card', 'mb-3'); // Bootstrapのカードクラス
            articleDiv.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" class="img-fluid rounded-start" alt="${article.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description || '説明がありません'}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary">詳細を読む</a>
                        </div>
                    </div>
                </div>
            `;
            resultsDiv.appendChild(articleDiv);
        });
    } catch (error) {
        console.error('ニュースの取得に失敗しました:', error);
        resultsDiv.innerHTML = '<p>ニュースの取得に失敗しました</p>';
        loadingDiv.style.display = 'none'; // ローディング非表示
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
}

