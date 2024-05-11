﻿using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models;

public class LoginRequest
{
    [Required] public string Email { get; set; } = null!;
    [Required] public string Password { get; set; } = null!;
}

public class LoginResponse
{
    [Required] public User User { get; set; } = null!;
    [Required] public string Token { get; set; } = null!;
}

public class RegistrationRequest
{
    [Required] public string FirstName { get; set; } = null!;
    [Required] public string SecondName { get; set; } = null!;
    [Required] public string Email { get; set; } = null!;
    [Required] public string Password { get; set; } = null!;
}

public class ChangeCredentialsRequest
{
    [Required] public string Vmid { get; set; } = null!;
    [Required] public string Password { get; set; } = null!;
    [Required] public string Username { get; set; } = null!;
    [Required] public string SshKey { get; set; } = null!;
}

public enum VmType
{
    Kali,
    Windows,
    Ubuntu
    
}

public class CreateLabRequest
{
    [Required] public string Id { get; set; } = null!;
}

public class CreateNewItem
{
    [Required] public string title { get; set; } = null!;
    [Required] public string text { get; set; } = null!;
    [Required] public string createdAt { get; set; } = null!;
}

public class CreateLabReservationRequest
{
    [Required] public string Theme { get; set; } = null!;
    [Required] public string Description { get; set; } = null!;
    [Required] public long TimeStart { get; set; }
    [Required] public long TimeEnd { get; set; }
    [Required] public string ReservorId { get; set; } = null!;
    [Required] public Lab Lab { get; set; } = null!;
}

public class UpdateLabReservationRequest
{
    [Required] public string Id { get; set; } = null!;
    [Required] public string Theme { get; set; } = null!;
    [Required] public string Description { get; set; } = null!;
    [Required] public long TimeStart { get; set; }
    [Required] public long TimeEnd { get; set; }
    [Required] public string ReservorId { get; set; } = null!;
    [Required] public Lab Lab { get; set; } = null!;
    [Required] public string CurrentUserId { get; set; } = null!;
}

public class CreateLabWorkRequest
{
    /// <summary>
    /// The id of the virtual machine that is template for the machine for the user to do the lab work
    /// </summary>
    [Required]
    public required string VmId { get; set; }
    
    /// <summary>
    /// The id of the lab work instruction
    /// </summary>
    [Required]
    public required string InstructionId { get; set; }
    
    /// <summary>
    /// Gets or sets the title of the laboratory work.
    /// </summary>
    [Required]
    public required string Title { get; set; }
    
    /// <summary>
    /// Gets or sets the short description of the laboratory work.
    /// </summary>
    [Required]
    public required string ShortDescription { get; set; }
    
    /// <summary>
    /// Gets or sets the detailed description of the laboratory work.
    /// </summary>
    [Required]
    public required string Description { get; set; }
}

public record UpdateLabWorkRequest
{
    /// <summary>
    /// The id of the virtual machine that is template for the machine for the user to do the lab work
    /// </summary>
    [Required]
    public required string VmId { get; set; }
    
    /// <summary>
    /// The id of the lab work instruction
    /// </summary>
    [Required]
    public required string InstructionId { get; set; }
    
    /// <summary>
    /// Gets or sets the title of the laboratory work.
    /// </summary>
    [Required]
    public required string Title { get; set; }
    
    /// <summary>
    /// Gets or sets the short description of the laboratory work.
    /// </summary>
    [Required]
    public required string ShortDescription { get; set; }
    
    /// <summary>
    /// Gets or sets the detailed description of the laboratory work.
    /// </summary>
    [Required]
    public required string Description { get; set; }
}