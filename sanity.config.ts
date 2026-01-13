'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// @ts-ignore
import {workflowManager} from '@multidots/sanity-plugin-workflow-manager'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    workflowManager({
      // Required: List of document types to include in workflow
      schemaTypes: ['radioNews', 'article', 'news'],
      
      // Optional: Custom workflow states
      states: [
        {
          id: 'draft',
          title: 'Draft',
          color: 'primary',
          transitions: ['review']
        },
        {
          id: 'review',
          title: 'In Review',
          color: 'warning',
          transitions: ['approved', 'changes-requested'],
          requireAssignment: true
        },
        {
          id: 'approved',
          title: 'Approved',
          color: 'success',
          requireAssignment: true,
          requireValidation: true
        }
      ]
    }),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio. https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
