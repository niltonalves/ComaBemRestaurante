﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace source.Data.Entities
{
    public class Prato
    {

        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Nome { get; set; }

        [Required]
        public decimal Preco { get; set; }

        public virtual int? RestauranteID { get; set; }

        public virtual Restaurante Restaurante { get; set; }
    }
}
