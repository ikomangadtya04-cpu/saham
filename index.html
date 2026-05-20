from flask import Flask, render_template

app = Flask(__name__)

stock_data = [
    {
        'kode': 'UNVR.JK',
        'harga': 1790,
        'return_pct': 16.61,
        'keterangan': 'Naik',
        'dividend': 764,
    },
    {
        'kode': 'ICBP.JK',
        'harga': 6750,
        'return_pct': -0.37,
        'keterangan': 'Turun',
        'dividend': 372,
    },
    {
        'kode': 'INDF.JK',
        'harga': 6675,
        'return_pct': -1.11,
        'keterangan': 'Turun',
        'dividend': 421,
    },
    {
        'kode': 'MYOR.JK',
        'harga': 1855,
        'return_pct': 8.80,
        'keterangan': 'Naik',
        'dividend': 303,
    },
    {
        'kode': 'SIDO.JK',
        'harga': 404,
        'return_pct': -16.78,
        'keterangan': 'Turun',
        'dividend': 911,
    },
]


def compute_ranking(stocks):
    returns = [item['return_pct'] for item in stocks]
    dividends = [item['dividend'] for item in stocks]
    min_return, max_return = min(returns), max(returns)
    min_div, max_div = min(dividends), max(dividends)
    return_range = max_return - min_return or 1
    div_range = max_div - min_div or 1

    ranked = []
    for item in stocks:
        return_score = (item['return_pct'] - min_return) / return_range
        dividend_score = (item['dividend'] - min_div) / div_range
        skor = round(return_score * 0.65 + dividend_score * 0.35, 4)
        ranked.append({**item, 'skor': skor})

    return sorted(ranked, key=lambda x: x['skor'], reverse=True)


# Dashboard
@app.route('/')
def dashboard():
    return render_template('dashboard.html')


# Data Saham
@app.route('/saham')
def saham():
    return render_template('saham.html', stocks=stock_data)


# Kriteria
@app.route('/kriteria')
def kriteria():
    return render_template('kriteria.html')


# Perbandingan AHP
@app.route('/ahp')
def ahp():
    return render_template('ahp.html')


# Hasil
@app.route('/hasil')
def hasil():
    ranking = compute_ranking(stock_data)
    return render_template('hasil.html', ranking=ranking)


if __name__ == '__main__':
    app.run(debug=True)



