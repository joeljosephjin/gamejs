class Player{
	constructor(name, id, color, active=false){
		this.name  = name;
		this.id    = id;
		this.color = color;
		this.active= active;
		this.tokens = this.createTokens(21);
	}

	/**
	* Creates token objects for player
	* @param	{integer}	num - NUmber of token of objects to bee created
	* @return	{array}		tokens - an array of new token objects
	*/
	createTokens(num){
		const tokens = [];
		for (let i = 0; i < num; i++) {
			tokens[i] = new Token(i, this);
		}
		return tokens;
	}

	get unusedTokens(){
        return this.tokens.filter(tok => !tok.dropped);
    }

	get activeToken(){
		return this.unusedTokens[0];
	}
	/**
	 * Check if a player has any undropped tokens left
	 * @return {Boolean} 
	 */
	checkTokens(){
		return this.unusedTokens.length == 0? false : true;
	}
}