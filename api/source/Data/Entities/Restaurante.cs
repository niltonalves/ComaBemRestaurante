using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace source.Data.Entities
{
    public class Restaurante
    {

        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Nome { get; set; }

        public virtual ICollection<Prato> Pratos { get; set; }
    }
}
