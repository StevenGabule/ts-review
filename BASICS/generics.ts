function simpleState<T>(initial:T) : [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}


const [str1get, str1set] = simpleState(10)
console.log(str1get());
str1set(50)
console.log(str1get());

const [str2get, str2set] = simpleState<string | null>(null)
console.log(str2get());
str2set("str")
console.log(str2get());


interface Rank<RankItem> {
    item: RankItem;
    rank: number
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number) : RankItem[] {
    const ranks: Rank<RankItem>[] = items.map(item => ({item, rank: rank(item)}))
    ranks.sort((a,b) => a.rank - b.rank)
    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {name: 'Pokemon 1', hp: 20},
    {name: 'Pokemon 2', hp: 5},
];

const ranks = ranker(pokemon, ({hp}) => hp)
console.log(ranks);





