using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using source.Data.Context;
using source.Data.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace source.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestauranteController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RestauranteController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Restaurante
        [HttpGet]
        public IEnumerable<Restaurante> GetRestaurante()
        {
            var retorno = _context.Restaurante;
            return retorno;
        }

        // GET: api/Restaurante/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRestaurante([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var restaurante = await _context.Restaurante.FindAsync(id);

            if (restaurante == null)
            {
                return NotFound();
            }

            return Ok(restaurante);
        }

        // PUT: api/Restaurante/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRestaurante([FromRoute] int id, [FromBody] Restaurante restaurante)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != restaurante.ID)
            {
                return BadRequest();
            }

            _context.Entry(restaurante).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestauranteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Restaurante
        [HttpPost]
        public async Task<IActionResult> PostRestaurante([FromBody] Restaurante restaurante)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            _context.Restaurante.Add(restaurante);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRestaurante", new { id = restaurante.ID }, restaurante);
        }

        // DELETE: api/Restaurante/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestaurante([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var restaurante = await _context.Restaurante
                .Include(t => t.Pratos)
                .FirstOrDefaultAsync(t => t.ID == id);

            if (restaurante == null)
            {
                return NotFound();
            }

            //deleta os pratos referentes ao restaurante
            if (restaurante.Pratos != null)
            {
                restaurante.Pratos.ToList().ForEach(item =>
                {
                    _context.Prato.Remove(item);
                });
            }

            _context.Restaurante.Remove(restaurante);

            await _context.SaveChangesAsync();

            return Ok(restaurante);
        }

        private bool RestauranteExists(int id)
        {
            return _context.Restaurante.Any(e => e.ID == id);
        }
    }
}