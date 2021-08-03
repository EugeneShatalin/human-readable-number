module.exports = function toReadable (number) {
  const units = (n) => {
    switch(n) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
    }
  }

  const dozens = (n) => {
    switch(n) {
      case '1':
        return 'ten';
      case '2':
        return 'twenty';
      case '3':
        return 'thirty';
      case '4':
        return 'forty';
      case '5':
        return 'fifty';
      case '6':
        return 'sixty';
      case '7':
        return 'seventy';
      case '8':
        return 'eighty';
      case '9':
        return 'ninety';
    }
  }

  const fromElevenToNineteen = (n) => {
    switch(n) {
      case '1':
        return 'eleven';
      case '2':
        return 'twelve';
      case '3':
        return 'thirteen';
      case '4':
        return 'fourteen';
      case '5':
        return 'fifteen';
      case '6':
        return 'sixteen';
      case '7':
        return 'seventeen';
      case '8':
        return 'eighteen';
      case '9':
        return 'nineteen';
    }
  }

  const arr = (`${number}`).split('');

  let result = '';

  if(arr.length == 3) {

    result += `${units(arr[0])} hundred`;

    if(arr[1] == '0' && arr[2] !=0) {
      result += ` ${units(arr[2])}`;
    }

    if(arr[1] == '1' && arr[2] == '0') {
      result += ` ${dozens(arr[1])}`;
    }

    if(arr[1] == '1' && arr[2] != '0') {
      result += ` ${fromElevenToNineteen(arr[2])}`;
    }

    if(arr[1] !== '1' && arr[1] != '0' && arr[2] == '0') {
      result += ` ${dozens(arr[1])}`;
    }

    if(arr[1] !== '1' && arr[1] != '0' && arr[2] != '0') {
      result += ` ${dozens(arr[1])} ${units(arr[2])}`;
    }
  }

  if(arr.length == 2) {
    if(arr[1] == '0') {
      result += `${dozens(arr[0])}`;
    }

    if(arr[0] == '1' && arr[1] !== '0') {
      result += `${fromElevenToNineteen(arr[1])}`;
    }

    if(arr[0] != '1' && arr[1] != '0') {
      result += `${dozens(arr[0])} ${units(arr[1])}`;
    }
  }

  if(arr.length == 1) {
    result += `${units(arr[0])}`;
  }

  return result;
}