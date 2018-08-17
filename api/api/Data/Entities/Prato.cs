using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Data.Entities
{
    public class Prato
    {

        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Nome { get; set; }


        public virtual int? RestauranteID { get; set; }

        public virtual Restaurante Restaurante { get; set; }
    }
}
