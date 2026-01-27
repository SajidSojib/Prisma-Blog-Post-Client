"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { useForm } from "@tanstack/react-form";
import { blogService } from "@/services/blog.service";
import { toast } from "sonner";
import * as z from "zod";
import React from "react";
import { createBlog } from "@/actions/blog.action";


const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Title is too long"),
  content: z.string().min(1, "Content is required").max(1000, "Content is too long"),
  tags: z.string(),
});

export default function BlogFormClient(
  props: React.ComponentProps<typeof Card>
) {
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: "",
    },

    validators: {
      onChange: formSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating blog...");

      const blogData = {
        title: value.title,
        content: value.content,
        tags: value.tags
          ?.split(",")
          .map((tag) => tag.trim())
          .filter(t => t.length > 0),
      }

      try {
        const res = await createBlog(blogData);
        if (res?.success) {
          toast.success("Blog created successfully", { id: toastId });
          form.reset();
        } else {
          toast.error("Failed to create blog", { id: toastId });
        }

      } catch (error) {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card {...props} className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>Write your blog post</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="blog-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Title */}
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Content */}
            <form.Field
              name="content"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>

                    <Textarea
                      id={field.name}
                      name={field.name}
                      rows={6}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* Tags */}
            <form.Field
              name="tags"
              children={(field) => {
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Tags (comma separated)
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      placeholder="mern, next, level"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button type="submit" form="blog-form">
          Create Blog
        </Button>
        <Separator />
      </CardFooter>
    </Card>
  );
}
