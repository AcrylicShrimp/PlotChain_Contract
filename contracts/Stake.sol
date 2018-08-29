
pragma solidity ^0.4.24;

contract Stake {
	
	event HeartChanged(uint64 novel, uint64 novelHeart, uint totalHeart);

	address private platform;

	uint public totalHeart;
	mapping(uint64 => uint64) public novelHeart;

	constructor() public {
		platform = msg.sender;
	}

	function setHeart(uint64 novel, uint64 heart) public {
		assert(msg.sender == platform);

		totalHeart -= novelHeart[novel];
		totalHeart += novelHeart[novel] = heart;

		emit HeartChanged(novel, heart, totalHeart);
	}
}