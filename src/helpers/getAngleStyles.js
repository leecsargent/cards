export default (index, count) => {
  //return { border: `1px solid red` };
  console.log(count);
  return {
    transform: `translate(-50%, -50%) rotate(calc(calc(-150deg / 2) + calc(150deg / calc(1 + 1))))`,
  };
};

//transform: translate(-50%, -50%) rotate(-$angle / 2 + $angle / ($count + 1) * $i);
