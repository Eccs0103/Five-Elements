//#region Navigation
document.getElementById("div_home").addEventListener
("click", 
	function(event)
	{
		Pages.id = 0;
		Files.save("Pages.id", Pages.id);
	}
);

document.getElementById("div_settings").addEventListener
("click", 
	function(event)
	{
		Pages.id = 1;
		Files.save("Pages.id", Pages.id);
	}
);

document.getElementById("div_information").addEventListener
("click", 
	function(event)
	{
		Pages.id = 2;
		Files.save("Pages.id", Pages.id);
	}
);
//#endregion

//#region Game
document.getElementById("div_execute").addEventListener
("click", 
	function()
	{
		Game.execute = !Game.execute;
	}
);

document.getElementById("div_reset").addEventListener
("click", 
	function(event)
	{
		Board.createMatrix();
		Board.generateBoard();
		Board.drawElements();
	}
);

document.getElementById("div_stats").addEventListener
("click", 
	function(event)
	{
		Game.stats = !Game.stats;
		Files.save("Game.stats", Game.stats);
	}
);
//#endregion

//#region Settings
document.getElementById("div_theme").addEventListener
("click",
	function(event)
	{
		Interface.darkTheme = !Interface.darkTheme;
		Files.save("Interface.darkTheme", Interface.darkTheme);
	}
);

document.getElementById("div_borders").addEventListener
("click",
	function(event)
	{
		Interface.borders = !Interface.borders;
		//Files.save("Interface.borders", Interface.borders);
	}
);

document.getElementById("input_size").addEventListener
("input",
	function(event)
	{
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
		Board.widthCells = parseInt(event.target.value);
		Board.heightCells = parseInt(event.target.value);
		if(Board.widthCells !== parseInt(event.target.value))
		{
			event.target.classList.replace("block", "denied");
		}
		else
		{
			if(event.target.classList.contains("denied"))
			{
				event.target.classList.replace("denied", "block");
			}
			Board.createMatrix();
			Board.generateBoard();
			Board.drawElements();
			Game.execute = false;
			Files.save("Board.size", Board.widthCells);
		}
	}
);
//#endregion