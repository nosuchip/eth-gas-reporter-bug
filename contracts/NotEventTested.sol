pragma solidity ^0.4.24;

import "./libs/MyLib.sol";

contract NotEventTested {
    event TestEvent(bool param2);

    function fun() public {
        emit TestEvent(MyLib.isSorted1());
    }
}
