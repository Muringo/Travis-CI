const FAV_COURSE = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('${FAV_COURSE} rocks!');
    await sleep(5000);
  }
}

main();
