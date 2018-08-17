using api.Data.Context;
using api.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PratoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PratoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Prato
        [HttpGet]
        public IEnumerable<Prato> GetPrato()
        {
            return _context.Prato.Include(t=>t.Restaurante);
        }

        // GET: api/Prato/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrato([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prato = await _context.Prato.FindAsync(id);

            if (prato == null)
            {
                return NotFound();
            }

            return Ok(prato);
        }

        // PUT: api/Prato/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrato([FromRoute] int id, [FromBody] Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prato.ID)
            {
                return BadRequest();
            }

            _context.Entry(prato).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PratoExists(id))
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

        // POST: api/Prato
        [HttpPost]
        public async Task<IActionResult> PostPrato([FromBody] Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Prato.Add(prato);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrato", new { id = prato.ID }, prato);
        }

        // DELETE: api/Prato/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrato([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prato = await _context.Prato.FindAsync(id);
            if (prato == null)
            {
                return NotFound();
            }

            _context.Prato.Remove(prato);
            await _context.SaveChangesAsync();

            return Ok(prato);
        }

        private bool PratoExists(int id)
        {
            return _context.Prato.Any(e => e.ID == id);
        }
    }
}