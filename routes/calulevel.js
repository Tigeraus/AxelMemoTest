/*
根据用户输入，注意力水平，BCI数据计算认知程度
 */


module.exports.getlevel = function(user_input, bci_input, levelist){
    var level = 0;
    var user_level = user_input;
    var bci_level = getbcilevel(bci_input);
    var levelist = levelist.slice();

    //processing
    

    return level;
}



function getbcilevel(bci_input){
    //根据BCI时序数据判断熟悉程度
    var bci_level = 0;


    return bci_level;

}