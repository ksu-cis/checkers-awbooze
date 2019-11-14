using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Primitives;

namespace TicTacToe.Pages
{
    public class IndexModel : PageModel
    {
        public Game Game { get; set; }

        public void OnGet()
        {
            Game = new Game();
        }

        public void OnPost(string state, int cx, int cy, int sx, int sy)
        {
            Game = Game.Deserialize(state);
            Checker checker = Game.Board[cx, cy];
            checker.Coords.X = sx;
            checker.Coords.Y = sy;

            // Would check for valid move now
            Game.Board[sx, sy] = checker;
            Game.Board[cx, cy] = null;
        }
    }
}
