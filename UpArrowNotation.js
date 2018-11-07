function Exponential(IniNum, Count, ExoNum){
    return Count === 1 ? IniNum*ExoNum: ExoNum === 0? 1: Exponential(IniNum, Count-1, Exponential(IniNum, Count, (ExoNum-1)));
};

console.log(Exponential(3,3,2));