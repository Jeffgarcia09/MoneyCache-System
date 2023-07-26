<?php

declare(strict_types=1);

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AgentMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    /**
     * Create a new message instance.
     */
    public $first_name;
    public $middle_name;
    public $last_name;

    public function __construct(
        string $first_name,
        string $middle_name,
        string $last_name
    ) {
        $this->first_name  = $first_name;
        $this->last_name   = $last_name;
        $this->middle_name = $middle_name;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Agent Created',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content()
    {
        return new Content(
            "You successfully created an Agent"
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
