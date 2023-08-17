import "./styles.css";

export default function App() {
  const ls = [50, 55, 57, 58, 60];
  const t = 165;
  const k = 3;

  /*
const alphabet = "abcdefg".split("");

function obtenerConjuntoPotencia(datos) {
  return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
}

obtenerConjuntoPotencia(alphabet).filter(item => item.length === 5).length;
*/

  function permutar(lista) {
    let n = lista.length;
    let result = [];
    if (n < 2) {
      result = [...lista]; // (* Ver nota)
    } else if (n === 2) {
      result = [
        [lista[0], lista[1]],
        [lista[1], lista[0]]
      ];
    } else {
      for (let j = 0; j < n; j++) {
        let listaMenor = lista.slice(0, j).concat(lista.slice(j + 1));
        let subResult = permutar(listaMenor);
        for (let i = 0; i < subResult.length; i++) {
          result.push([lista[j], ...subResult[i]]);
        }
      }
    }
    return result;
  }

  let res = permutar(ls);
  res = res.map((v) => v.join(".*?")).join("|");

  //console.log(res);

  function chooseBestSum(t, k, ls) {
    var maxLength = 0;
    var recurseCities = function (townsAway, lastIndex) {
      townsAway = townsAway || [];
      if (townsAway.length === k) {
        var sumTotDist = townsAway.reduce((a, b) => a + b);
        if (sumTotDist <= t && sumTotDist > maxLength) {
          maxLength = sumTotDist;
        }
        return;
      }
      for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
        recurseCities(townsAway.concat(ls[i]), i);
      }
    };
    recurseCities();
    return maxLength || null;
  }

  console.log(chooseBestSum(t, k, ls));

  return (
    <div className="App">
      <input />
    </div>
  );
}
