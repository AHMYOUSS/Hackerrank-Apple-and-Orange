protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    console.log(splitted)
    part1 = splitted[0]; console.log(part1)
    avg = part1.length / 2;
    part1 = part1.substring(0, avg);
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.cosdm"));